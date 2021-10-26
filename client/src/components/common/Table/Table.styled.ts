import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    display: block;
    background-color: saddlebrown;
  }

  th {
    background-color: #29292D;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: left;
    vertical-align: middle;
    padding: 6px 16px 6px 16px;
    font-weight: 400;
    color: #E3E3E4;
  }

  td {
    padding: 7px 16px;
    font-size: 14px;
  }


  tbody {
  ${'' /* These styles are required for a scrollable table body */}
    height: 650px;
    display: block;
    width: 100%;


    tr:hover {
      background-color: #343434;
      cursor: pointer;
    }

  }

  td, th {
    border-right: 1px solid #828286;

    :last-child {
      border-right: none;
    }
  }


  a {
    color: #b3cdf3;
  }

  a:visited {
    color: #5257be;
  }

`;

export const TableContainer = styled.div`
  display: block;
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #4b494a;
    border-radius: 4px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: #6e6e73;
    border-radius: 4px;
  }
`