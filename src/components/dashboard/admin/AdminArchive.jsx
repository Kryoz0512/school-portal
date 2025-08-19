import { useState } from 'react'
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import AdminArchiveDialog from "./AdminArchiveDialog"

const userData = [
 {
  name: "Ivan Reiner Panelo",
  id: "2025-001",
  role: "Student",
  yearAndSection: [
   {
    schoolYear: "2025-2026",
    gradeAndSection: "Grade 9 Santos",
    adviser: "Czianel Santos",
   },
   {
    schoolYear: "2026-2027",
    gradeAndSection: "Grade 10 MMARCC",
    adviser: "Mark Eugenio",
   }
  ],
  status:"Graduated"
 },
 {
  name: "Jeff Eric Cocjin",
  id: "0020-2024",
  role: "Teacher",
  yearEmployed:"2024",
  yearResigned:"2025",
  subjects:["English", "Math"],
  status:"Resigned"
 },
 {
  name: "Nico Samonte",
  id: "0014-2022",
  role: "Teacher",
  yearEmployed:"2022",
  yearResigned:"2025",
  subjects:["Science", "Math"],
  status:"Resigned"
 },
 {
  name: "Cassandra Miranda",
  id: "0100-2024",
  role: "Teacher",
  yearEmployed:"2024",
  yearResigned:"2024",
  subjects:["MAPEH"],
  status:"Resigned"
 },
 {
  name: "JC Ocampo",
  id: "0012-2023",
  role: "Teacher",
  yearEmployed:"2023",
  yearResigned:"2025",
  subjects:["English", "Values"],
  status:"Fired"
 },
 {
  name: "Shandler Canoza",
  id: "2023-002",
  role: "Student",
  yearAndSection: [
   {
    schoolYear: "2023-2024",
    gradeAndSection: "Grade 7 Seeping",
    adviser: "Mel Moses Seeping",
   },
   {
    schoolYear: "2025-2026",
    gradeAndSection: "Grade 8 Guanio",
    adviser: "Angela Marie Guanio",
   }
  ],
  status:"Transferred"
 },
 {
  name: "Nina Nambio",
  id: "2022-001",
  role: "Student",
  yearAndSection: [
   {
    schoolYear: "2022-2023",
    gradeAndSection: "Grade 10 MMACC",
    adviser: "John Daniel Torreda",
   }
  ],
  status:"Graduated"
 },
 {
  name: "Jover Daracan",
  id: "002-2022",
  role: "Teacher",
  yearEmployed:"2022",
  yearResigned:"2023",
  subjects:["Caligraphy"],
  status:"Resigned"
 },
]

// Grade 7 Seeping
// Grade 7 Berber

// Grade 8 Tejano
// Grade 8 Guanio

// Grade 9 Santos
// Grade 9 Bayudang

// Grade 10 MMACC
// Grade 10 MMARCC


/*
Grade 7 Math 101
Grade 7 Biology
Grade 7 Basic English

Grade 8 Algebra
Grade 8 Physics
Grade 8 Grammar

Grade 9 Geometry
Grade 9 Chemistry
Grade 9 Punctuation

Grade 10 Trigonometry
Grade 10 Geology
Grade 10 Advance English
*/

export default function AdminArchive() {
 const [filter, setFilter] = useState("")
 const [search, setSearch] = useState("");

 const filteredUserData = userData.filter(
  item => {
   const filterBySelect = item.role === filter
   const filterBySearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase())
   return filterBySelect & filterBySearch
  }
 )

 return (
  <div className="flex flex-1 flex-col p-4 space-y-4 mt-3">
   {/* dropdown */}
   <div className="flex justify-end">
    {/* user roles */}
    <div className="flex gap-4 w-1/2">
     <Input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search by Name or ID" />
     <Select
      onValueChange={setFilter}
      value={filter}>
      <SelectTrigger className="w-fit">
       <SelectValue placeholder="Select Role" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="Student">Student</SelectItem>
       <SelectItem value="Teacher">Teacher</SelectItem>
      </SelectContent>
     </Select>
    </div>
   </div>

   {/* card */}
   <Card>
    <CardHeader>
     <CardTitle>Archive</CardTitle>
    </CardHeader>
    <CardContent>
     {/* table */}
     <Table>
      <TableHeader>
       <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Action</TableHead>
       </TableRow>
      </TableHeader>
      <TableBody>

       {
        filteredUserData.length > 0 ? (
         filteredUserData.map(item => {
          return (
           <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell><AdminArchiveDialog data={item} /></TableCell>
           </TableRow>
          )
         })
        ) : (
         <TableRow>
          <TableCell colSpan={9} className="text-center">Select filter to show data</TableCell>
         </TableRow>
        )
       }
      </TableBody>
     </Table>
    </CardContent>
   </Card>
  </div>
 )
}
