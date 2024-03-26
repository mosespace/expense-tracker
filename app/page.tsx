import { getExpenses, getIncome } from "@/actions/expenses";
import Home from "@/components/home";

export default async function page() {
  const expenses: any = await getExpenses();
  const income: any = await getIncome();

  const totalExpense: any = expenses.reduce(
    (total: any, expense: any) => total + expense.amount,
    0
  );

  const totalIncome: any = income.reduce(
    (total: any, income: any) => total + income.amount,
    0
  );

  const finalTotal = (totalExpense - totalIncome).toLocaleString();

  return (
    <Home
      expenses={expenses}
      income={income}
      finalTotal={finalTotal}
      totalExpense={totalExpense}
      totalIncome={totalIncome}
    />
  );
}
