import { getExpenses, getIncome } from "@/actions/expenses";
import Home from "@/components/home";

export default async function page() {
  const expenses: any = await getExpenses();
  const income: any = await getIncome();

  return <Home expenses={expenses} income={income}/>;
}
