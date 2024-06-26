import React from "react";
import { TrainFront } from "lucide-react";
import DeleteBtn from "./delete-btn";
import EditBtn from "./edit-btn";
import { cn } from "@/lib/utils";

export default function RecentCard({ data, type }: any) {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((data: any) => (
        <div
          key={data.id}
          className='border p-4 rounded-md flex items-center justify-between'
        >
          <div className='flex gap-2 items-center'>
            <div className='p-3 rounded-full bg-slate-100'>
              <TrainFront className='w-4 h-4 dark:text-[#322F50]' />
            </div>
            <h4 className='capitalize'>{data.name}</h4>
          </div>

          <div className='flex gap-2 items-center'>
            <span
              className={cn("text-red-600 font-bold", {
                "text-[#322F50] dark:text-green-600": type === "income",
              })}
            >
              {type === "income" ? `$${data.amount}` : `-$${data.amount}`}
            </span>
            <DeleteBtn id={data.id} type={type} />
            <EditBtn id={data.id} type={type} />
          </div>
        </div>
      ))}
    </div>
  );
}
