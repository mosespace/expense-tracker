import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import IncomeForm from "@/components/income-form";
import ExpenseForm from "./expense-form";

export default function Create({ title, description, type }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <Plus />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col'>
            <h2 className='font-black mb-2'>{title}</h2>
            <p>{description}</p>
          </div>
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
        </div>
        {type === "expense" && <ExpenseForm />}
        {type === "income" && <IncomeForm />}
      </AlertDialogContent>
    </AlertDialog>
  );
}
