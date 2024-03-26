import React from "react";
import { TrainFront } from "lucide-react";

export default function Expenses() {
  return (
    <div className='border p-4 rounded-md flex justify-between'>
      <div className='flex gap-2 items-center'>
        <TrainFront />
        <h4>Education Fees</h4>
      </div>

      <span className='text-red-600 font-bold'>-$76,909</span>
    </div>
  );
}
