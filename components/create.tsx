import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/form";

export default function Create() {
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
            <h2 className='font-black mb-2'>Create Income</h2>
            <p>
              Create income changes here and then click save when you're done.
            </p>
          </div>
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
        </div>
        <InputForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
