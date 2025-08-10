import React, { useState } from 'react'
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
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const isMaintenance = false

const sections = ["A", "B", "C", "D"]
const subjects = ["Math", "Science", "English", "History"]

const dummyStudents = [
  { id: 1, name: "Granger", grade: "Grade 10", section: "A", subject: "Math", status: "Active" },
  { id: 2, name: "Minotaur", grade: "Grade 9", section: "B", subject: "Science", status: "Inactive" },
  { id: 3, name: "Miya", grade: "Grade 7", section: "C", subject: "English", status: "Active" },
  { id: 4, name: "Layla", grade: "Grade 1000", section: "D", subject: "History", status: "Active" },
  { id: 5, name: "Lapu-Lapu", grade: "Grade 10", section: "A", subject: "Science", status: "Active" },
  { id: 6, name: "Badang", grade: "Grade 10", section: "A", subject: "Science", status: "Active" },
  { id: 7, name: "Selena", grade: "Grade 10", section: "A", subject: "Science", status: "Active" },
  { id: 8, name: "Nana", grade: "Grade 10", section: "A", subject: "Science", status: "Active" },
]

export default function TeacherManageStudents() {
  const [selectedSection, setSelectedSection] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)

  if (isMaintenance) {
    return <UnderMaintenance />
  }

  const filteredStudents = dummyStudents.filter(student => {
    return (
      (!selectedSection || student.section === selectedSection) &&
      (!selectedSubject || student.subject === selectedSubject)
    )
  })


  return (
    <div className="p-6 spacce-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Students</CardTitle>
          <CardDescription>Select a section and subject to view kupals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className='flex flex-col gap-4'>
            <div>
              <h4 className='font-semibold mb-2'>Section Tite</h4>
              <div className='flex gap-2 flex-wrap'>
                {sections.map(section => (
                  <Button
                    key={section}
                    variant={selectedSection === section ? "default" : "outline"}
                    onClick={() => setSelectedSection(section)}
                  >
                    {section}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className='font-semibold mb-2'>Subject</h4>
              <div className='flex gap-2 flex-wrap'>
                {subjects.map(subject => (
                  <Button
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedSection(null)
                  setSelectedSubject(null)
                }}
              >
                Clear Filter
              </Button>
            </div>
          </div>

          <Table>
            <TableCaption>
              {filteredStudents.length > 0
                ? `Showing ${filteredStudents.length} students`
                : "No students found"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map(student => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  <TableCell>{student.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
