"use client";
import { deleteExpense } from "@/actions/expenses";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader, Trash2 } from "lucide-react";
import React from "react";
import { toast } from "./ui/use-toast";

export default function DeleteBtn({ id }: any) {
  const [loading, setLoading] = React.useState<boolean>(false);

  //   console.log(id);

  async function handleDelete() {
    setLoading(true);
    try {
      const req = await deleteExpense(id);
      setLoading(false);
      location.reload();
      toast({
        title: "Expense has been deleted successfully",
      });
    } catch (error: any) {
      setLoading(false);
      toast({
        title: "Deletion of the expense has failed",
      });
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <Trash2 className='w-4 h-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure you want to delete?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            expense and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='flex gap-2'
            onClick={() => handleDelete()}
          >
            {loading && <Loader className='animate-spin w-4 h-4' />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
