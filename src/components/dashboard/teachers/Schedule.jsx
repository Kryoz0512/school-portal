import React from 'react'
import UnderMaintenance from '../../UnderMaintenance'
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
 CardDescription,
} from "@/components/ui/card"
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
 TableCaption
} from "@/components/ui/table"

/*
Grade 7 Seeping
Grade 7 Berber

Grade 8 Tejano
Grade 8 Guanio

Grade 9 Santos
Grade 9 Bayudang

Grade 10 MMACC
Grade 10 MMARCC
*/

const scheduleData = [
 {
  time: '7:30 AM - 8:30 AM',
  Monday: { subject: 'Mathematics 101', room: 'Room 101', section: "Grade 7 Seeping" },
  Tuesday: { subject: 'Mathematics 101', room: 'Room 205', section: "Grade 7 Berber" },
  Wednesday: { subject: 'Algebra', room: 'Lab 101', section: "Grade 8 Tejano" },
  Thursday: { subject: 'Algebra', room: 'Room 102', section: "Grade 8 Guanio" },
  Friday: { subject: 'Geometry', room: 'Room 103', section: "Grade 9 Santos" }
 },
 {
  time: '8:35 AM - 9:35 AM',
  Monday: { subject: 'Geometry', room: 'Room 205', section: "Grade 9 Bayudang" },
  Tuesday: { subject: 'Trigonometry', room: 'Lab 101', section: "Grade 10 MMACC" },
  Wednesday: { subject: 'Trigonometry', room: 'Room 101', section: "Grade 10 MMARCC" },
  Thursday: { subject: 'Mathematics 101', room: 'Room 207', section: "Grade 7 Seeping" },
  Friday: { subject: 'Algebra', room: 'Room 207', section: "Grade 8 Tejano" }
 },

 {
  time: '9:50 AM - 10:50 AM',
  Monday: { subject: 'Trigonometry', room: 'Room 104', section: "Grade 10 MMACC" },
  Tuesday: { subject: 'Geometry', room: 'Room 101', section: "Grade 9 Bayudang" },
  Wednesday: { subject: 'Algebra', room: 'Room 205', section: "Grade 8  Guanio" },
  Thursday: { subject: 'Geometry ', room: 'Lab 101', section: "Grade 9 Santos" },
  Friday: { subject: 'Algebra', room: 'Room 102', section: "Grade 8  Guanio" }
 }
]

const isMaintenance = false
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',]
export default function Schedule() {

 if (isMaintenance) {
  return <UnderMaintenance />
 }

 return (
  <>
   <div className='flex justify-center flex-1 flex-col p-4'>
    <Card>
     <CardHeader>
      <CardTitle>Class Schedule</CardTitle>
      <CardDescription>
       Academic Year  2025-2026
      </CardDescription>
     </CardHeader>
     <CardContent>
      <Table>
       <TableCaption className="text-lg">*Note* The Schedule might change</TableCaption>
       <TableHeader>
        <TableRow>
         <TableHead className="w-[150px]">Time</TableHead>
         {days.map((day) => (
          <TableHead key={day}>{day}</TableHead>
         ))}
        </TableRow>
       </TableHeader>
       <TableBody>
        {scheduleData.map((row, index) => (
         <TableRow key={index}>
          <TableCell className="font-medium">{row.time}</TableCell>
          {days.map((day) => (
           <TableCell key={day} className="text-sm">
            <div className='font-medium'>
             {row[day].subject}
            </div>
            <div className='font-medium'>
             {row[day].room}
            </div>
            <div className='font-medium'>
             {row[day].section}
            </div>
           </TableCell>
          ))}
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </CardContent>
    </Card>
   </div>
  </>
 )
}