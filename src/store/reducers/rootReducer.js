import { combineReducers } from "@reduxjs/toolkit";
import { reducer as BalanceReducer } from "../slices/balance";

export default combineReducers({
  balance: BalanceReducer,
});
