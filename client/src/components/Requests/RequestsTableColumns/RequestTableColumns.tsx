import { CellProps, Row } from "react-table";
import TableActions from "./TableActions/TableActions";

export const COLUMNS = [
  {
    Header: "№",
    accessor: "index",
    Cell: (row: CellProps<Row>) => {
      return row.row.index + 1;
    },
    maxWidth: 40,
  },
  {
    Header: "Дата и время получения",
    accessor: "application_date",
    maxWidth: 120,
  },
  {
    Header: "ФИО клиента",
    accessor: "client_full_name",
    maxWidth: 180,
  },
  {
    Header: "Фирма клиента",
    accessor: "company",
    maxWidth: 140,
  },
  {
    Header: "ФИО перевозчика",
    accessor: "carrier_full_name",
  },
  {
    Header: "Контактный телефон перевозчика",
    accessor: "mobile_number",
    maxWidth: 110,
  },
  {
    Header: "Комментарии",
    accessor: "comments",
    minWidth: 280,
  },
  {
    Header: "ATI",
    accessor: "ATI",
    minWidth: 220,
    Cell: (row: CellProps<Row>) => {
      if(row.value!=0){
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
