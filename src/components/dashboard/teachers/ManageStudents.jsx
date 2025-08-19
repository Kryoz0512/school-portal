import { useState } from 'react'
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
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import EditGradeDialog from './EditGradeDialog'

const studentData = [
  {
    name: "Ivan Reiner Panelo",
    studentID: "2025-001",
    grade: "Grade 7 Seeping",
    subject: "Basic English",
    grades: [
      {
        firstQuarter: "90",
        secondQuarter: "90",
        thirdQuarter: "90",
        fourthQuarter: "90",
      }
    ],
  },
  {
    name: "Jeff Eric Cocjin",
    studentID: "2025-002",
    grade: "Grade 7 Seeping",
    subject: "Basic English",
    grades: [
      {
        firstQuarter: "30",
        secondQuarter: "30",
        thirdQuarter: "30",
        fourthQuarter: "85",
      }
    ],
  },
  {
    name: "Nico Samonte",
    studentID: "2024-001",
    grade: "Grade 8 Guanio",
    subject: "Grammar",
    grades: [
      {
        firstQuarter: "90",
        secondQuarter: "80",
        thirdQuarter: "78",
        fourthQuarter: "97",
      }
    ],
  },
  {
    name: "Cassandra Miranda",
    studentID: "2024-002",
    grade: "Grade 8 Tejano",
    subject: "Grammar",
    grades: [
      {
        firstQuarter: "100",
        secondQuarter: "90",
        thirdQuarter: "98",
        fourthQuarter: "97",
      }
    ],
    average: "",
  },
  {
    name: "JC Ocampo",
    studentID: "2023-001",
    grade: "Grade 9 Bayudang",
    subject: "Punctuation",
    grades: [
      {
        firstQuarter: "90",
        secondQuarter: "83",
        thirdQuarter: "88",
        fourthQuarter: "96",
      }
    ],
  },
  {
    name: "Shandler Canoza",
    studentID: "2023-002",
    grade: "Grade 9 Santos",
    subject: "Punctuation",
    grades: [
      {
        firstQuarter: "95",
        secondQuarter: "93",
        thirdQuarter: "98",
        fourthQuarter: "96",
      }
    ],
  },
  {
    name: "Nina Nambio",
    studentID: "2022-001",
    grade: "Grade 10 MMACC",
    subject: "Advance English",
    grades: [
      {
        firstQuarter: "97",
        secondQuarter: "87",
        thirdQuarter: "88",
        fourthQuarter: "97",
      }
    ],
  },
  {
    name: "Jover Daracan",
    studentID: "2022-002",
    grade: "Grade 10 MMARCC",
    subject: "Advance English",
    grades: [
      {
        firstQuarter: "93",
        secondQuarter: "93",
        thirdQuarter: "87",
        fourthQuarter: "96",
      }
    ],
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

export default function TeacherManageStudents() {

  const defaultValue = "All"
  const [filter, setFilter] = useState(defaultValue)
  const [search, setSearch] = useState("");

  const filteredStudents = studentData.filter(
    item => {
      const withSpaceFilter = filter.replace(/([a-zA-Z])(\d)/, '$1 $2').replace(/(\d)([A-Za-z])/, '$1 $2')
      const filterBySelect = filter === "All" || item.grade === withSpaceFilter
      const filterBySearch = search === "" || item.name.toLowerCase().includes(search.toLowerCase()) || item.studentID.toLowerCase().includes(search.toLowerCase())
      return filterBySelect & filterBySearch
    }
  )

  return (
    <div className="flex flex-1 flex-col p-4 space-y-4 mt-3">
      {/* dropdown */}
      <div className="flex justify-end">
        {/* grade and section */}
        <div className="flex gap-4 w-1/2">
          <Input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search for Student" />
          <Select
            onValueChange={setFilter}
            value={filter}
            defaultValue={filter}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Grade & Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Grade7Seeping">Grade 7 Seeping</SelectItem>
              <SelectItem value="Grade7Berber">Grade 7 Berber</SelectItem>
              <SelectItem value="Grade8Tejano">Grade 8 Tejano</SelectItem>
              <SelectItem value="Grade8Guanio">Grade 8 Guanio</SelectItem>
              <SelectItem value="Grade9Santos">Grade 9 Santos</SelectItem>
              <SelectItem value="Grade9Bayudang">Grade 9 Bayudang</SelectItem>
              <SelectItem value="Grade10MMACC">Grade 10 MMACC</SelectItem>
              <SelectItem value="Grade10MMARCC">Grade 10 MMARCC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* card */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Student</CardTitle>
          {
            filter !== "All" && filteredStudents.length > 0 && (
              <CardDescription>Subject: {filteredStudents[0].subject} </CardDescription>
            )
          }
        </CardHeader>
        <CardContent>
          {/* table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Q1</TableHead>
                <TableHead>Q2</TableHead>
                <TableHead>Q3</TableHead>
                <TableHead>Q4</TableHead>
                <TableHead>Average</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              {
                filteredStudents.length > 0 ? (
                  filteredStudents.map(item => {

                    const averageGrade = item.grades.map(item => {
                      const aveGrade = (Number(item.firstQuarter) + Number(item.secondQuarter) + Number(item.thirdQuarter) + Number(item.fourthQuarter)) / 4
                      return aveGrade.toFixed(2)
                    })

                    const className = `${averageGrade >= 75.00 ? "text-green-500" : "text-red-500"
                      } font-medium`

                    return (
                      <TableRow key={item.studentID}>
                        <TableCell>{item.studentID}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        {
                          item.grades.map((item) => (
                            <>
                              <TableCell>{item.firstQuarter}</TableCell>
                              <TableCell>{item.secondQuarter}</TableCell>
                              <TableCell>{item.thirdQuarter}</TableCell>
                              <TableCell>{item.fourthQuarter}</TableCell>
                            </>

                          ))
                        }
                        <TableCell>{averageGrade}</TableCell>
                        <TableCell
                          className={className}
                        >
                          {averageGrade >= 75.00 ? "Passed" : "Failed"}
                        </TableCell>
                        <TableCell><EditGradeDialog student={item} /></TableCell>
                      </TableRow>
                    )
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center">No Data</TableCell>
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
