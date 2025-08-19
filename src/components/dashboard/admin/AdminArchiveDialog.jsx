import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from 'lucide-react';

export default function AdminArchiveDialog({ data }) {

 const role = ["Student", "Teacher"]
 const student = "Student's Data"
 const teacher = "Teacher's Data"

 return (
  <Dialog>
   <DialogTrigger><Eye /></DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>{
      data.role === role[0] ? student :
       data.role === role[1] ? teacher :
        ""
     }</DialogTitle>
     <DialogDescription>
      <div className="text-black mt-3">
       <h1 className="font-semibold tracking-wider">Name: {data.name}</h1>
       <p>ID: {data.id}</p>
       <p>Role: {data.role}</p>
       <p>Status: {data.status}</p>
       {
        role[1] === data.role && (
         <div>
          <p>Year of Employment: {data.yearEmployed}</p>
          <p>Year of Unemployment: {data.yearResigned}</p>
          <p>Subjects Taught:</p>
          <ul className="ml-23 list-disc [&>li]:mt-2">
           {
            data.subjects && data.subjects.map(
             item => (
              <li key={item}>{item}</li>
             )
            )
           }
          </ul>
         </div>
        )
       }
       {
        role[0] === data.role && (
         data.yearAndSection && data.yearAndSection.map(
          item => (
           <div key={item.schoolYear} className="my-3">
            
            <p>School Year: {item.schoolYear}</p>
            
            <ul className="ml-23 list-disc [&>li]:mt-2">
             <li>Grade And Section: {item.gradeAndSection}</li>
             <li>Adviser: {item.adviser}</li>
            </ul>
           </div>
          )
         )
        )
       }
      </div>
     </DialogDescription>
    </DialogHeader>
   </DialogContent>
  </Dialog>
 )
}
