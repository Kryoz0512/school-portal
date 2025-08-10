import React from 'react'
import UnderMaintenance from '../../UnderMaintenance'
import { Badge } from '@/components/ui/badge'

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

const mockSubject = [
  {
    code: "ENG-7",
    name: "English-101",
    teacher: "Ms. Santos",
    grade_level: 7,
    status: "Completed"
  },

  {
    code: "ENG-8",
    name: "Grammar",
    teacher: "Ms. Tejano",
    grade_level: 8,
    status: "Enrolled"
  },

  {
    code: "ENG-9",
    name: "Punctuation",
    teacher: "Ms. Seeping",
    grade_level: 9,
    status: "Pending",
  },

  {
    code: "ENG-10",
    name: "English Master Level",
    teacher: "Ms. Bayudang",
    grade_level: 10,
    status: "Pending",
  },

  {
    code: "Math-7",
    name: "Basic Math",
    teacher: "Mr. Berber",
    grade_level: 7,
    status: "Completed"
  },

  {
    code: "Math-8",
    name: "Algebra",
    teacher: "Mr. Guanio",
    grade_level: 8,
    status: "Enrolled"
  },

  {
    code: "Math-9",
    name: "Geometry",
    teacher: "Ms. Ortega",
    grade_level: 9,
    status: "Pending",
  },

  {
    code: "Math-10",
    name: "Trigonometry",
    teacher: "Ms. Ocampo",
    grade_level: 10,
    status: "Pending",
  },

  {
    code: "Science-7",
    name: "Earth Science",
    teacher: "Ms. Ferrer",
    grade_level: 7,
    status: "Completed"
  },

  {
    code: "Science-8",
    name: "Biology",
    teacher: "Mr. Miranda",
    grade_level: 8,
    status: "Enrolled"
  },

  {
    code: "Science-9",
    name: "Chemistry",
    teacher: "Ms. Canoza",
    grade_level: 9,
    status: "Pending",
  },

  {
    code: "Science-10",
    name: "Physics",
    teacher: "Ms. Chan",
    grade_level: 10,
    status: "Pending",

  }
]

const GradeCard = ({ gradeLevel, subjects }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-500 hover:bg-green-600"
      case "Enrolled": return "bg-blue-500 hover:bg-blue-600"
      case "Pending": return "bg-yellow-500 hover:bg-yellow-600"
      default: return ""
    }
  }

  const getGradeStatus = (level) => {
    switch (level) {
      case 7: return "Completed"
      case 8: return "Enrolled"
      default: return "Pending"
    }
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Grade{gradeLevel}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead className="w-[200px]">Subject Name</TableHead>
              <TableHead className="w-[180px]">Teacher</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject, index) => (
              <TableRow key={index} className="hover:bg-slate-100">
                <TableCell className="font-medium">{subject.code}</TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.teacher}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(subject.status)}>
                    {subject.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


const isMaintenance = false

export default function Subject() {
  if (isMaintenance) {
    return (<UnderMaintenance />)
  }

  const gradeSubjects = {
    7:mockSubject.filter(subject => subject.grade_level === 7),
    8:mockSubject.filter(subject => subject.grade_level === 8),
    9:mockSubject.filter(subject => subject.grade_level === 9),
    10:mockSubject.filter(subject => subject.grade_level === 10),
  }

  return (
    <div className='p-4 space-y-4'>
      {[7, 8, 9, 10].map(grade => (
        <GradeCard
        key={grade}
        gradeLevel={grade}
        subjects={gradeSubjects[grade]}/>
      ))}
    </div>

  )
}
