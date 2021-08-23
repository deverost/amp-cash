import { balanceType } from "./types";

export default function createData(
  name: string,
  amount: number,
  type: balanceType,
  date: string,
  id: string
) {
  return { name, amount, type, date, id };
}
