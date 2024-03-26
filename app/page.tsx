"use client";
import Expenses from "@/components/expenses";
import Income from "@/components/income";
import Create from "@/components/create";
import { useState } from "react";

export default function Home() {
  const [activeClass, setActiveClass] = useState<string>("expense");

  function handleExpense() {
    setActiveClass("expense");
  }

  function handleIncome() {
    setActiveClass("income");
  }

  return (
    <main className='flex min-h-screen flex-col items-center py-8'>
      <div className='max-w-xl w-full flex flex-col min-h-screen'>
        <div className='bg-slate-950 text-white rounded-md p-14 w-full flex flex-col'>
          <h2 className='text-base'>Total balance</h2>
          <p className='font-black text-2xl'>$3,000</p>
        </div>

        <div className='flex justify-between gap-4 mt-8'>
          <div className='bg-pink-300 text-black rounded-md p-8 w-full flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h2 className='text-sm'>Expense</h2>
              <p className='font-black text-2xl'>$50,000</p>
            </div>
            <Create />
          </div>

          <div className='bg-orange-500 text-black rounded-md p-8 w-full flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h2 className='text-sm'>Income</h2>
              <p className='font-black text-2xl'>$20,000</p>
            </div>
            <Create />
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='font-black text-xl'>
            Recent {activeClass === "expense" ? "Expenses" : "Incomes"}
          </h3>

          <div className='flex mt-4 items-center justify-between'>
            <button
              onClick={() => handleExpense()}
              className='bg-slate-950 text-white rounded-md px-8 py-2'
            >
              Expenses
            </button>
            <button
              onClick={() => handleIncome()}
              className='bg-slate-950 text-white rounded-md px-8 py-2'
            >
              Income
            </button>
          </div>
          <div className='mt-4'>
            {activeClass === "expense" ? <Expenses /> : <Income />}
          </div>
        </div>
      </div>
    </main>
  );
}
