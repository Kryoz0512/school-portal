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



const scheduleData = [
  {
    time: '7:30 AM - 8:30 AM',
    Monday: { subject: 'Mathematics', room: 'Room 101' },
    Tuesday: { subject: 'English', room: 'Room 205' },
    Wednesday: { subject: 'Science', room: 'Lab 101' },
    Thursday: { subject: 'Filipino', room: 'Room 102' },
    Friday: { subject: 'Social Studies', room: 'Room 103' }
  },
  {
    time: '8:35 AM - 9:35 AM',
    Monday: { subject: 'English', room: 'Room 205' },
    Tuesday: { subject: 'Science', room: 'Lab 101' },
    Wednesday: { subject: 'Mathematics', room: 'Room 101' },
    Thursday: { subject: 'P.E.', room: 'Gym' },
    Friday: { subject: 'Computer', room: 'CompLab' }
  },
  {
    time: '9:35 AM - 9:50 AM',
    Monday: { subject: 'Morning Break', room: 'Cafeteria' },
    Tuesday: { subject: 'Morning Break', room: 'Cafeteria' },
    Wednesday: { subject: 'Morning Break', room: 'Cafeteria' },
    Thursday: { subject: 'Morning Break', room: 'Cafeteria' },
    Friday: { subject: 'Morning Break', room: 'Cafeteria' }
  },
  {
    time: '9:50 AM - 10:50 AM',
    Monday: { subject: 'Values', room: 'Room 104' },
    Tuesday: { subject: 'Mathematics', room: 'Room 101' },
    Wednesday: { subject: 'English', room: 'Room 205' },
    Thursday: { subject: 'Science', room: 'Lab 101' },
    Friday: { subject: 'Filipino', room: 'Room 102' }
  }
]

const isMaintenance = false
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',]
export default function schedule() {

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
              Academic Year  2025-2026 | Grade 10 - Section A
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption className="text-lg">*Note* Your might change</TableCaption>
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