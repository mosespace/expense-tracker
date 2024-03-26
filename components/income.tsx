import React from "react";
import { TrainFront } from "lucide-react";

export default function Income({ income }: any) {
  return (
    <>
      {income.map((item: any) => (
        <div className='border p-4 rounded-md flex justify-between'>
          <div className='flex gap-2 items-center'>
            <TrainFront />
            <h4>{item.name}</h4>
          </div>

          <span className='text-slate-950 font-bold'>-${item.amount}</span>
        </div>
      ))}
    </>
  );
}
