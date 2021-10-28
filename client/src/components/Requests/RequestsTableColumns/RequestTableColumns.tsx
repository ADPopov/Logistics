import { CellProps, Row } from "react-table";
import TableActions from "./TableActions/TableActions";

export const COLUMNS = [
  {
    Header: "№",
    accessor: "index",
    Cell: (row: CellProps<Row>) => {
      return row.row.index + 1;
    },
    width: 40,
  },
  {
    Header: "Дата и время получения",
    accessor: "application_date",

  },
  {
    Header: "ФИО клиента",
    accessor: "client_full_name",
  },
  {
    Header: "Фирма клиента",
    accessor: "company",
  },
  {
    Header: "ФИО перевозчика",
    accessor: "carrier_full_name",
  },
  {
    Header: "Контактный телефон перевозчика",
    accessor: "mobile_number",
  },
  {
    Header: "Комментарии",
    accessor: "comments",
  },
  {
    Header: "ATI",
    accessor: "ATI",
    minWidth: 220,
    Cell: (row: CellProps<Row>) => {
      if(row.value!==0){
        return (
          <a
            href={`https://ati.su/firms/${row.value}/info`}
          >{`https://ati.su/firms/${row.value}/info`}</a>
        );
      } else
        return ''

    },
  },
  {
    Header: "Actions",
    accessor: "actions",
    width: 95,
    Cell: (row: CellProps<Row>) => {
      // @ts-ignore
      const rowIdx = row.row.original.id;
      return <TableActions rowIdx={rowIdx} />;
    },
  },
];
