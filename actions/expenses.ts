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
    const expenses = await db.expense.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log("The following expenses have been fetched:", expenses);
    return expenses;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function deleteExpense(id: any) {
  // console.log(id);
  try {
    // Retrieve the expense from the database using both id and role
    const expense = await db.expense.findUnique({
      where: { id },
    });

    // Check if the expense exists
    if (!expense) {
      throw new Error("Expense not found");
    }

    // If the expense matches any in the database, proceed with deleting it
    const deleteExpense = await db.expense.delete({
      where: { id },
    });

    // Perform any necessary expense-deletion actions
    revalidatePath("/");

    console.log(deleteExpense);
    return deleteExpense;
  } catch (error: any) {
    console.error("Error deleting expense:", error);
  }
}

export async function getExpense(id: any) {
  try {
    const expense = await db.expense.findUnique({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return expense;
  } catch (error: any) {
    console.log(error);
  }
}

export async function updateExpense(id: any, data: any) {
  try {
    // Retrieve the expense from the database using both id and userId
    const expense = await db.expense.findUnique({
      where: { id },
    });

    // Check if the expense exists
    if (!expense) {
      throw new Error("Task not found");
    }

    // If the expense exists, proceed with updating the expense
    const updatedExpense = await db.expense.update({
      where: { id },
      data,
    });

    // Perform any necessary post-deletion actions
    revalidatePath("/");

    // console.log(updatedExpense);
    return updatedExpense;
  } catch (error: any) {
    console.error("Error updating expense:", error);
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
    const incomes = await db.income.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log("The following incomes have been fetched:", incomes);
    return incomes;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function fetchIncome(id: any) {
  try {
    const income = await db.income.findUnique({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return income;
  } catch (error: any) {
    console.log(error);
  }
}

export async function deleteIncome(id: any) {
  // console.log(id);
  try {
    // Retrieve the income from the database using both id and role
    const income = await db.income.findUnique({
      where: { id },
    });

    // Check if the income exists
    if (!income) {
      throw new Error("Income not found");
    }

    // If the income matches any in the database, proceed with deleting it
    const deleteIncome = await db.income.delete({
      where: { id },
    });

    // Perform any necessary income-deletion actions
    revalidatePath("/");

    // console.log(deleteIncome);
    return deleteIncome;
  } catch (error: any) {
    console.error("Error deleting income:", error);
  }
}

export async function updateIncome(id: any, data: any) {
  try {
    // Retrieve the income from the database using both id and userId
    const income = await db.income.findUnique({
      where: { id },
    });

    // Check if the income exists
    if (!income) {
      throw new Error("Income not found");
    }

    // If the income exists, proceed with updating the income
    const updatedIncome = await db.income.update({
      where: { id },
      data,
    });

    revalidatePath("/");

    // console.log(updatedIncome);
    return updatedIncome;
  } catch (error: any) {
    console.error("Error updating income:", error);
    throw error;
  }
}
