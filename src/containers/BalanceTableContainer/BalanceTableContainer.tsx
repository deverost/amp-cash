import React, { useState, useEffect } from "react";
import BalanceTable from "../../components/BalanceTable/BalanceTable";
import { useDispatch, useSelector } from "react-redux";
import { balanceType, chartType, rowType } from "../../lib/types";
import { addRow } from "../../store/slices/balance";
import SideCard from "../../components/SideCard/SideCard";
import Grid from "@material-ui/core/Grid";
import Chart from "../../components/Chart/Chart";

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

const getSummedBalance = (arr: any[]): chartType[] => {
  let summedBalance: {
    [type: string]: number;
  } = {};
  arr.forEach((item) => {
    const itemMonth = Month[new Date(item.date).getMonth()];
    if (summedBalance.hasOwnProperty(itemMonth) && item.type === "incomes") {
      summedBalance[itemMonth] += item.amount;
    } else if (item.type === "incomes") summedBalance[itemMonth] = item.amount;
  });
  return Object.keys(summedBalance).map((key: string) => {
    return {
      name: key,
      incomes: summedBalance[key],
    };
  });
};

function BalanceTableContainer() {
  const dispatch = useDispatch();

  const { balance } = useSelector((state: any) => state.balance);
  const [rows, setRows] = useState<rowType[]>([]);
  const [chartData, setChartData] = useState<chartType[]>([]);

  const createRow = (
    name: string,
    amount: number,
    type: balanceType,
    date: string
  ) => {
    dispatch(addRow({ name, amount, type, date }));
  };

  useEffect(() => {
    setRows(balance);
    setChartData(getSummedBalance(balance));
  }, [balance]);

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <SideCard createRow={createRow} />
      </Grid>
      <Grid item>
        <BalanceTable rows={rows} />
        <Chart chartData={chartData} />
      </Grid>
    </Grid>
  );
}

export default BalanceTableContainer;
