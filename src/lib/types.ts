export type balanceType = "incomes" | "expenses";

export type rowType = {
  name: string;
  amount: number;
  type: balanceType;
  date: string;
  id: string;
};

export type chartType = {
  name: string;
  incomes: number;
}
