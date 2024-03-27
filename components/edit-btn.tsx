"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FilePenLine, X } from "lucide-react";
import { fetchIncome, getExpense } from "@/actions/expenses";
import ExpenseForm from "./expense-form";
import IncomeForm from "./income-form";

export default function EditBtn({ id, type }: any) {
  const [expenses, setExpenses] = useState(null);
  const [income, setIncome] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch expenseData and incomeData in parallel
        const [expenseData, incomeData]: any = await Promise.all([
          getExpense(id),
          fetchIncome(id),
        ]);
        setExpenses(expenseData);
        setIncome(incomeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <FilePenLine className='w-4 h-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col'>
            <h2 className='font-black mb-2 capitalize'>Create {type}</h2>
            <p>
              Create {type} changes here and then click save when you're done.
            </p>
          </div>
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
        </div>
        {expenses && type === "expense" && (
          <ExpenseForm initialData={expenses} />
        )}
        {income && type === "income" && <IncomeForm initialData={income} />}
      </AlertDialogContent>
    </AlertDialog>
  );
}
