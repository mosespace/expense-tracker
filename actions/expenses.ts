"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function postExpense({ data }: any) {
  try {
    const expense = await db.expense.create({
      data,
    });
    revalidatePath("/");
    console.log("The following expense has been created:", expense);
    return expense;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getExpenses() {
  try {
    const expenses = await db.expense.findMany({});
    // console.log("The following expenses have been fetched:", expenses);
    return expenses;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function postIncome({ data }: any) {
  try {
    const income = await db.income.create({
      data,
    });
    revalidatePath("/");
    console.log("The following income has been created:", income);
    return income;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getIncome() {
  try {
    const incomes = await db.income.findMany();
    // console.log("The following incomes have been fetched:", incomes);
    return incomes;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
