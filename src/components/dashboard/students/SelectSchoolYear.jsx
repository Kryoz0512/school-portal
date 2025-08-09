import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"

export default function SelectSchoolYear() {
 return (
  <Select>
   <SelectTrigger className="w-fit">
    <SelectValue placeholder="School Year" />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value="2025-2026">2025-2026</SelectItem>
    <SelectItem value="2026-2027">2026-2027</SelectItem>
    <SelectItem value="2027-2028">2027-2028</SelectItem>
   </SelectContent>
  </Select>
 )
}
