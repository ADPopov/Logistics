import React, { FC, useEffect } from "react";
import {
  Column,
  useFlexLayout,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Request } from "../../../models/Request";
import { SearchBox } from "../SearchBox/SearchBox";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { TableContainer, TableWrapper } from "./Table.styled";

interface TableProps {
  columns: Column<Request>[];
  data: Request[] | [];
  isAdmin: boolean;
}

const Table: FC<TableProps> = ({ columns, data, isAdmin }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    setHiddenColumns,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    usePagination
  );

  useEffect(() => {
    setHiddenColumns(isAdmin ? [] : ["actions"]);
  }, [isAdmin, setHiddenColumns]);

  return (
    <>
      <SearchBox setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}/>
      <TableContainer>
        <TableWrapper {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (<AiFillCaretDown />) : (<AiFillCaretUp />)) : ("")}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableWrapper>
      </TableContainer>
    </>
  );
};

export default Table;
