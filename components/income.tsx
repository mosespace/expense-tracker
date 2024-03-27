import React from "react";
import { Armchair, TrainFront } from "lucide-react";

export default function Income({ income }: any) {
  return (
    <div className='flex flex-col gap-2'>
      {income.map((item: any) => (
        <div className='border p-4 rounded-md flex items-center  justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='p-3 rounded-full bg-slate-100'>
              <Armchair className='w-4 h-4' />
            </div>
            <h4 className='capitalize'>{item.name}</h4>
          </div>

          <span className='text-[#322F50] font-bold'>${item.amount}</span>
        </div>
      ))}
    </div>
  );
}
