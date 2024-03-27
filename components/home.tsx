"use client";
import { useState } from "react";
import RecentCard from "@/components/recent-card";
import { cn } from "@/lib/utils";
import { BellDot } from "lucide-react";
import Create from "@/components/create";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

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
    <main className='p-8 overflow-hidden flex min-h-screen flex-col items-center py-8'>
      <div className='md:max-w-xl w-full flex flex-col min-h-screen'>
        <div className='flex justify-between mb-4 items-center'>
          <div className='flex gap-3 items-center'>
            <Image
              width={100}
              height={100}
              src='/moses.jpg'
              className='w-14 h-14 rounded-full object-cover'
              alt='Kisakye Moses also Known As uncle Moses'
            />
            <div className='flex flex-col'>
              <span>Hello!</span>
              <p className='font-bold capitalize'>uncle moses</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <BellDot className='w-6 h-6 cursor-pointer' />
            <ModeToggle />
          </div>
        </div>

        <div className='bg-[#322F50] text-white rounded-3xl p-8 md:p-14 w-full flex items-center justify-between'>
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

        <div className='flex flex-col md:flex-row justify-between gap-4 mt-8'>
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
            Recent {activeClass === "expense" ? "Expense" : "Incomes"}
          </h3>

          <div className='flex mt-4 items-center justify-between'>
            <button
              onClick={() => handleExpense()}
              className={cn("border border-[#322F50] rounded-md px-8 py-2", {
                "bg-green-600 border-none text-white":
                  activeClass === "expense",
              })}
            >
              Expense
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
