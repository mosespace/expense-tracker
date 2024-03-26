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
  import { Plus } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import InputForm from "@/components/income-form";
  
  export default function IncomeCreate() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>
            <Plus />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <InputForm />
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  