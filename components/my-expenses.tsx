import React from "react";
import { TrainFront } from "lucide-react";
import DeleteBtn from "./delete-btn";
import EditBtn from "./edit-btn";

export default function Expenses({ expenses }: any) {
  return (
    <div className='flex flex-col gap-2'>
      {expenses.map((expense: any) => (
        <div
          key={expense.id}
          className='border p-4 rounded-md flex items-center justify-between'
        >
          <div className='flex gap-2 items-center'>
            <div className='p-3 rounded-full bg-slate-100'>
              <TrainFront className='w-4 h-4' />
            </div>
            <h4 className='capitalize'>{expense.name}</h4>
          </div>

          <div className='flex gap-2 items-center'>
            <span className='text-red-600 font-bold'>-${expense.amount}</span>
            <DeleteBtn id={expense.id} />
            <EditBtn id={expense.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
