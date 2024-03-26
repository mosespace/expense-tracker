import React from "react";
import { TrainFront } from "lucide-react";

export default async function Expenses({expenses}:any) {
  return (
    <>
      {expenses.map((expense: any) => (
        <div
          key={expense.id}
          className='border p-4 rounded-md flex justify-between'
        >
          <div className='flex gap-2 items-center'>
            <TrainFront />
            <h4>{expense.name}</h4>
          </div>

          <span className='text-red-600 font-bold'>-${expense.amount}</span>
        </div>
      ))}
    </>
  );
}
