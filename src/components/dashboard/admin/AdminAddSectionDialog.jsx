import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react";
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 DialogFooter,
 DialogClose,
} from "@/components/ui/dialog";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"

import { sectionData } from "./ManageSections";


export default function AdminAddSectionDialog() {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline"><Pencil /></Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Create New Section</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col gap-5">
     {/* grade level */}
     <div className="mb-3 space-y-3">
      <Label htmlFor="gradeLevel">Grade Level</Label>
      <Select>
       <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Grade Level" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="7">Grade 7</SelectItem>
        <SelectItem value="8">Grade 8</SelectItem>
        <SelectItem value="9">Grade 9</SelectItem>
        <SelectItem value="10">Grade 10</SelectItem>
       </SelectContent>
      </Select>
     </div>

     {/* adviser */}
     <div className="mb-3 space-y-3">
      <Label htmlFor="sectionAdviser">Section Adviser</Label>
      <Select>
       <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Section Adviser" />
       </SelectTrigger>
       <SelectContent>
        {
         sectionData.length > 0 && (
          sectionData.map(
           (item, index) => {
            return (
             <SelectItem key={index} value={item.adviser}>Prof. {item.adviser}</SelectItem>
            )
           }
          )
         )
        }
       </SelectContent>
      </Select>
     </div>

     {/* grade section */}
     <div className="mb-3 space-y-3">
      <Label htmlFor="sectionName">Section Name</Label>
      <Input id="sectionName" name="sectionName" placeholder="ex. Saturn" />
     </div>
    </div>
    <DialogFooter className="sm:justify-start">
     <DialogClose asChild>
      <Button type="button">
       Add
      </Button>
     </DialogClose>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 )
}
