"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FilePenLine, X } from "lucide-react";
import InputForm from "./form";
import { getExpense } from "@/actions/expenses";

export default function EditBtn({ id }: any) {
  const [initialData, setInitialData] = useState(null);
  // console.log(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getExpense(id);
      setInitialData(data);
    };

    fetchData();
  }, [id]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <FilePenLine className='w-4 h-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col'>
            <h2 className='font-black mb-2'>Create Income</h2>
            <p>
              Create income changes here and then click save when you're done.
            </p>
          </div>
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
        </div>
        <InputForm initialData={initialData} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
