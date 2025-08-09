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
} from "@/components/ui/alert-dialog"
import { CircleQuestionMark } from 'lucide-react';
import { Button } from "@/components/ui/button"


export default function ReportCardDialog() {
 return (
  <AlertDialog>
   <AlertDialogTrigger>
    <Button variant="outline" size="sm">
     <CircleQuestionMark /> Grading system
    </Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Grading System</AlertDialogTitle>
     <AlertDialogDescription>
      <p>90-100: Outstanding</p>
      <p>85-89: Very Satisfactory</p>
      <p>80-84: Satisfactory</p>
      <p>75-79: Fairly Satisfactory</p>
      <p>Below 75: OOHHHHH DIBBAAAA NAKAKA PUTANGINAAAAAAAA</p>
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 )
}
