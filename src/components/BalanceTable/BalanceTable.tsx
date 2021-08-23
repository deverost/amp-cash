import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { rowType } from "../../lib/types";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import "./BalanceTable.css";

interface IBalanceTable {
  rows: Array<rowType>;
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    type: "string",
    width: 110,
  },
  {
    field: "date",
    headerName: "Date",
    type: "number",
    width: 110,
  },
];

export default function BalanceTable(props: IBalanceTable) {
  const { rows } = props;
  const classes = useStyles();

  return (
    <DataGrid
      className={classes.table}
      rows={rows}
      columns={columns}
      disableSelectionOnClick
      classes={{
        cell: "balance-table_cell",
      }}
      pageSize={5}
      getRowClassName={(params) => {
        return params.row.type === "incomes"
          ? classes.incomesRow
          : classes.expensesRow;
      }}
    />
  );
}

const useStyles = makeStyles({
  table: {
    width: 650,
    minHeight: 400,
    height: "initial",
    marginLeft: 20,
    marginBottom: 20,
  },
  incomesRow: {
    backgroundColor: "#5CCCCC",
  },
  expensesRow: {
    backgroundColor: "#FF7373",
  },
});
