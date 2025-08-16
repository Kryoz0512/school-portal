import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 DialogFooter,
 DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react"

export default function EditGradeDialog({ student }) {

 return (
  <Dialog>
   <form>
    <DialogTrigger asChild>
     <Button variant="outline">
      <SquarePen />
     </Button>
    </DialogTrigger>
    <DialogContent className="">
     <DialogHeader>
      <DialogTitle>Edit Grades</DialogTitle>
      <DialogDescription>
       Name: {student.name}
      </DialogDescription>
      <DialogDescription>
       Student ID: {student.studentID}
      </DialogDescription>
      <DialogDescription>
       Student ID: {student.subject}
      </DialogDescription>
     </DialogHeader>
     {/* inputs */}
     {
      student.grades.map((item, index) => (
       <div className="grid gap-4" key={index}>
        <div className="grid gap-3">
         <Label htmlFor="firstQuarter">First Quarter</Label>
         <Input id="firstQuarter" name="firstQuarter" defaultValue={item.firstQuarter} />
        </div>
        <div className="grid gap-3">
         <Label htmlFor="secondQuarter">Second Quarter</Label>
         <Input id="secondQuarter" name="secondQuarter" defaultValue={item.secondQuarter} />
        </div>
        <div className="grid gap-3">
         <Label htmlFor="thirdQuarter">Third Quarter</Label>
         <Input id="thirdQuarter" name="thirdQuarter" defaultValue={item.thirdQuarter} />
        </div>
        <div className="grid gap-3">
         <Label htmlFor="fourthQuarter">Fourth Quarter</Label>
         <Input id="fourthQuarter" name="fourthQuarter" defaultValue={item.fourthQuarter} />
        </div>
       </div>
      ))
     }
     <DialogFooter >
      <DialogClose asChild>
       <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit">Save changes</Button>
     </DialogFooter>
    </DialogContent>
   </form>
  </Dialog>
 )
}



{/* <Dialog>
 <DialogTrigger asChild>
  <Button onClick={() => setSelectedRow(student)} variant="outline">
   <SquarePen />
  </Button>
 </DialogTrigger>
 <DialogContent>
  <DialogHeader>
   <DialogTitle>Edit Grades</DialogTitle>
   <DialogDescription>
    Name: {selectedRow.name}
   </DialogDescription>
   <DialogDescription>
    Student ID: {selectedRow.studentID}
   </DialogDescription>
   <DialogDescription>
    Student ID: {selectedRow.subject}
   </DialogDescription>
   <DialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
     </DialogDescription>
  </DialogHeader>

  <form action=""></form>
 </DialogContent>
</Dialog> */}