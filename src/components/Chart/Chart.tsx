import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { chartType } from "../../lib/types";

interface IChart {
  chartData: chartType[];
}

function Chart(props: IChart) {
  const { chartData } = props;

  return (
    <LineChart width={650} height={300} data={chartData}>
      <Line type="monotone" dataKey="incomes" stroke="#5CCCCC" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default Chart;
