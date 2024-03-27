"use client";
import { useState } from "react";
import RecentCard from "@/components/recent-card";
import { cn } from "@/lib/utils";
import { BellDot } from "lucide-react";
import Create from "@/components/create";

export default function Home({
  finalTotal,
  expenses,
  income,
  totalExpense,
  totalIncome,
}: any) {
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
        <div className='flex justify-between mb-4 items-center'>
          <div className='flex gap-3 items-center'>
            <img
              src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
              className='w-16 rounded-full'
              alt='Avatar'
            />
            <div className='flex flex-col'>
              <span>Hello!</span>
              <p className='font-bold capitalize'>uncle moses</p>
            </div>
          </div>
          <BellDot className='w-6 h-6 cursor-pointer' />
        </div>
        <div className='bg-[#322F50] text-white rounded-3xl p-14 w-full flex items-center justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-base'>Total balance</h2>
            <p className='font-black text-2xl'>${finalTotal}</p>
          </div>
          <img
            src='/pie-chart.svg'
            alt='svg-demo-place-holder-image'
            className='w-[4.5rem] h-[4.5rem]'
          />
        </div>

        <div className='flex justify-between gap-4 mt-8'>
          <div className='bg-[#B1D1D8] text-[#322F50] rounded-3xl p-8 w-full flex justify-between gap-3'>
            <div className='flex flex-col'>
              <h2 className='text-sm'>Expense</h2>
              <p className='font-black text-2xl'>
                ${totalExpense.toLocaleString()}
              </p>
            </div>
            <Create
              title='Create Expense'
              description="Create expense changes here and then click save when you're done."
              type='expense'
            />
          </div>

          <div className='bg-[#EFDAC7] text-[#322F50] rounded-3xl p-8 w-full flex  justify-between gap-3'>
            <div className='flex flex-col'>
              <h2 className='text-sm'>Income</h2>
              <p className='font-black text-2xl'>
                ${totalIncome.toLocaleString()}
              </p>
            </div>
            <Create
              title='Create Income'
              description="Create income changes here and then click save when you're done."
              type='income'
            />
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='font-black text-xl'>
            Recent {activeClass === "expense" ? "RecentCard" : "Incomes"}
          </h3>

          <div className='flex mt-4 items-center justify-between'>
            <button
              onClick={() => handleExpense()}
              className={cn("border border-[#322F50] rounded-md px-8 py-2", {
                "bg-green-600 border-none text-white":
                  activeClass === "expense",
              })}
            >
              RecentCard
            </button>
            <button
              onClick={() => handleIncome()}
              className={cn("border border-[#322F50] rounded-md px-8 py-2", {
                "bg-green-600 border-none text-white": activeClass === "income",
              })}
            >
              Income
            </button>
          </div>
          <div className='mt-4'>
            {activeClass === "expense" ? (
              <RecentCard data={expenses} type='expense' />
            ) : (
              <RecentCard data={income} type='income' />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
