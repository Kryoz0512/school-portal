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
    status: "Approved"
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
    status: "Approved"
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
    status: "Approved"
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

const gradeBadge = (status) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-emerald-500 ">Completed</Badge>
    case "Pending":
      return <Badge className="bg-yellow-500 ">Pending</Badge>
    case "Approved":
      return <Badge className="bg-blue-400 ">Enrolled</Badge>
    default:
      return null;
  }
}

const isMaintenance = false
export default function ManageClearance() {
  if (isMaintenance) {
    return (<UnderMaintenance />)
  }
  return (
    <div className='p-4'>
      <Card>
        <CardHeader>
          <CardTitle>All Subjects</CardTitle>
          <CardDescription>Subject List by Grade Level</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>List of Subjects</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead className="w-[100px]">Year Level</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubject
                .sort((a, b) => a.grade_level - b.grade_level)
                .map((subject, index) => (
                  <TableRow key={index} className="hover:bg-slate-100">
                    <TableCell className="font-medium">{subject.code}</TableCell>
                    <TableCell>{subject.name}</TableCell>
                    <TableCell>{subject.teacher}</TableCell>
                    <TableCell>Grade {subject.grade_level}</TableCell>
                    <TableCell>{gradeBadge(subject.status)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
