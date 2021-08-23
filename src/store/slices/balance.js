import { createSlice } from "@reduxjs/toolkit";
import createData from "../../lib/createData";
import { v4 as uuid } from "uuid";

const initialState = {
  balance: [
    createData("food", 1000, "incomes", "2021-07-1", uuid()),
    createData("transport", 800, "incomes", "2021-06-22", uuid()),
    createData("transport", 450, "expenses", "2021-10-05", uuid()),
    createData("food", 340, "incomes", "2021-08-11", uuid()),
    createData("rent", 380, "incomes", "2021-05-23", uuid()),
    createData("travel", 670, "incomes", "2021-09-01", uuid()),
  ],
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    addRow: (state, action) => {
      state.balance = [
        ...state.balance,
        createData(
          action.payload.name,
          Number(action.payload.amount),
          action.payload.type,
          action.payload.date,
          uuid()
        ),
      ];
    },
  },
});

const { reducer, actions } = balanceSlice;

const { addRow } = actions;

export { reducer, addRow };
