import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2, SquarePen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";


/*
status
pending = dilaw
completed = green
enrolled = blue
dropped = red
*/

export const studentData = [
  {
    LRN: "2016-2001-129",
    name: "Mark Richard Eugenio",
    grade: 7,
    status: "Completed",
    section: "Seeping",
    grades: [
      {
        subject: "Math",
        firstQuarter: 91,
        secondQuarter: 87,
        thirdQuarter: 88,
        fourthQuarter: 85,
      },
      {
        subject: "English",
        firstQuarter: 91,
        secondQuarter: 94,
        thirdQuarter: 92,
        fourthQuarter: 95,
      },
      {
        subject: "Science",
        firstQuarter: 92,
        secondQuarter: 98,
        thirdQuarter: 96,
        fourthQuarter: 88,
      }

    ]
  },
  {
    LRN: "2018-2001-129",
    name: "John Daniel Torreda",
    grade: 8,
    status: "Pending",
    section: "Guanio",
    grades: [
      {
        subject: "Math",
        firstQuarter: 90,
        secondQuarter: 83,
        thirdQuarter: 85,
        fourthQuarter: null,
      },
      {
        subject: "English",
        firstQuarter: 93,
        secondQuarter: 92,
        thirdQuarter: 91,
        fourthQuarter: 88,
      },
      {
        subject: "Science",
        firstQuarter: 92,
        secondQuarter: 98,
        thirdQuarter: 96,
        fourthQuarter: null,
      }

    ]
  },
  {
    LRN: "2016-2221-129",
    name: "Carl Kenneth Sagnip",
    grade: 9,
    section: "Santos",
    status: "Enrolled",
    grades: [
      {
        subject: "Math",
        firstQuarter: 91,
        secondQuarter: 87,
        thirdQuarter: 88,
        fourthQuarter: 85,
      },
      {
        subject: "English",
        firstQuarter: 91,
        secondQuarter: 94,
        thirdQuarter: 92,
        fourthQuarter: 95,
      },
      {
        subject: "Science",
        firstQuarter: 92,
        secondQuarter: 98,
        thirdQuarter: 96,
        fourthQuarter: 88,
      }

    ]
  },

]

const grades = [
  {
    grade: 7,
    section: "Seeping"
  },
  {
    grade: 7,
    section: "Berber"
  },
  {
    grade: 8,
    section: "Guanio"
  },
  {
    grade: 8,
    section: "Tejano"
  },
  {
    grade: 9,
    section: "Santos"
  },
  {
    grade: 9,
    section: "Bayudang"
  },
  {
    grade: 10,
    section: "MMACC"
  },
  {
    grade: 10,
    section: "MMARCC"
  },
]

export default function ManageStudents() {

  const defaultFilter = "All"
  const [selectedStudentFilter, setSelectedStudentFilter] = useState(defaultFilter)
  const [search, setSearch] = useState("")
  const filteredStudentData = studentData.filter(
    item => {
      const filterByNameAndId = search === "" || item.name.toLowerCase().includes(search.toLowerCase()) || item.LRN.toLowerCase().includes(search.toLowerCase())
      const filterByGrade = selectedStudentFilter === defaultFilter || item.grade === Number(selectedStudentFilter)

      return filterByGrade & filterByNameAndId
    }
  )

  return (
    <div className="flex flex-1 flex-col p-4 gap-3 space-y-4">
      {/* add section dialog */}
      <div className="flex w-full gap-3 justify-end">
        <Input className="w-1/2" placeholder="Search by Name or ID" onChange={(event) => { setSearch(event.target.value) }} />
        <Select
          onValueChange={setSelectedStudentFilter}
          value={selectedStudentFilter}
          defaultValue={selectedStudentFilter}
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Filter by Grade Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="7">Grade: 7</SelectItem>
            <SelectItem value="8">Grade: 8</SelectItem>
            <SelectItem value="9">Grade: 9</SelectItem>
            <SelectItem value="10">Grade: 10</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* section table */}
      <Card>
        <CardHeader>
          <CardTitle className="">Manage Students</CardTitle>
        </CardHeader>
        <CardContent>
          {/* table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student LRN</TableHead>
                <TableHead>Grade Level</TableHead>
                <TableHead>Section Name</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                filteredStudentData.length > 0 ? (
                  filteredStudentData.map(
                    (item, index) => {

                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.LRN}</TableCell>
                          <TableCell>Grade {item.grade}</TableCell>
                          <TableCell>{item.section}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>
                            <Badge
                              className={`
                                ${item.status === "Pending" ? "bg-yellow-500" :
                                  item.status === "Completed" ? "bg-green-500" :
                                    item.status === "Dropped" ? "bg-red-500" :
                                      item.status === "Enrolled" ? "bg-blue-500" :
                                        null
                                }`
                              }
                            >
                              {
                                item.status === "Completed" ? "Completed" :
                                  item.status === "Pending" ? "Pending" :
                                    item.status === "Dropped" ? "Dropped" :
                                      item.status === "Enrolled" ? "Enrolled" :
                                        null
                              }
                            </Badge>
                          </TableCell>
                          <TableCell className="flex justify-end gap-4">
                            <AdminEditDialogStudent data={item} />
                            <AdminAlertDialogStudent />
                          </TableCell>
                        </TableRow>
                      )
                    }
                  )
                ) : (
                  <TableRow>
                    <TableCell className="font-medium text-center" colSpan={5}>No Data</TableCell>
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

// AdminAlertDialogStudent
function AdminAlertDialogStudent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive"><Trash2 /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure you want to remove this student?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will remove the student from this list.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-700">Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// AdminEditDialogStudent
function AdminEditDialogStudent({ data }) {

  const [selectedGradeLevel, setSelectedGradeLevel] = useState("")

  const nextGrade = grades.filter(
    (item) => {
      const currentStudentGrade = item.grade === data.grade + 1
      return currentStudentGrade
    }
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><SquarePen /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-100">
          <div className="flex flex-col gap-5">
            {/* LRN */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="studentLrn">Student LRN</Label>
              <Input
                onChange={() => { }}
                disabled
                id="studentLrn"
                name="studentLrn"
                placeholder="Student LRN"
                value={data.LRN}
              />
            </div>
            {/* grade level */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="gradeLevel">Grade Level</Label>
              <Input
                onChange={() => { }}
                disabled
                id="gradeLevel"
                name="gradeLevel"
                placeholder="Grade Level"
                value={"Grade " + data.grade}
              />
            </div>
            {/* grade section */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="sectionName">Section</Label>
              <Input
                onChange={() => { }}
                disabled
                id="sectionName"
                name="sectionName"
                placeholder="Grade Section"
                value={data.section}
              />
            </div>
            {/* student name */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                onChange={() => { }}
                disabled
                id="studentName"
                name="studentName"
                placeholder="Student Name"
                value={data.name}
              />
            </div>
            {/* status */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="grades">Grades</Label>
              {
                data.grades ? (
                  data.grades.map(
                    (item, index) => {

                      const aveGrades = (item.firstQuarter + item.secondQuarter + item.thirdQuarter + item.fourthQuarter) / 4

                      return (
                        <div key={index} className="bg-slate-200 p-4 rounded-xl">
                          <p>Subject: {item.subject}</p>
                          <p>First Quarter: {item.firstQuarter ? item.firstQuarter : "N/A"}</p>
                          <p>Second Quarter: {item.secondQuarter ? item.secondQuarter : "N/A"}</p>
                          <p>Third Quarter: {item.thirdQuarter ? item.thirdQuarter : "N/A"}</p>
                          <p>Fourth Quarter: {item.fourthQuarter ? item.fourthQuarter : "N/A"}</p>
                          <p className="text-sm mt-3">Average: {aveGrades.toFixed(2)}</p>
                        </div>
                      )
                    }
                  )
                ) : (
                  <p>No grades submitted</p>
                )
              }
            </div>
            {/* status */}
            <div className="mb-3 space-y-3">
              <Label htmlFor="status">Status</Label>
              <Badge
                className={`
                                ${data.status === "Pending" ? "bg-yellow-500" :
                    data.status === "Completed" ? "bg-green-500" :
                      data.status === "Dropped" ? "bg-red-500" :
                        data.status === "Enrolled" ? "bg-blue-500" :
                          null
                  }`
                }
              >
                {
                  data.status === "Completed" ? "Completed" :
                    data.status === "Pending" ? "Pending" :
                      data.status === "Dropped" ? "Dropped" :
                        data.status === "Enrolled" ? "Enrolled" :
                          null
                }
              </Badge>
              <p className={`
                                ${data.status === "Pending" ? "text-yellow-500" :
                  data.status === "Completed" ? "text-green-500" :
                    data.status === "Dropped" ? "text-red-500" :
                      data.status === "Enrolled" ? "text-blue-500" :
                        null
                } text-sm`
              }>
                {
                  data.status === "Completed" ? "The student is ready for advancement" :
                    data.status === "Pending" ? "Waiting for teachers to submit the grades of the student" :
                      data.status === "Dropped" ? " Transferred / Stopped" :
                        data.status === "Enrolled" ? " The student is now enrolled for the school year" :
                          null
                }
              </p>

              {
                data.status === "Completed" && (
                  <Select
                    onValueChange={setSelectedGradeLevel}
                    value={selectedGradeLevel}
                  >
                    <SelectTrigger className="w-fit">
                      <SelectValue placeholder="Select Grade Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        nextGrade && nextGrade.map(
                          (item, index) => (
                            <SelectItem key={index} value={`grade${item.grade + item.section}`}>
                              Grade {item.grade + " " + item.section}
                            </SelectItem>
                          )
                        )
                      }
                    </SelectContent>
                  </Select>
                )
              }
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <DialogFooter className="sm:justify-start">
          <Button type="button" disabled={selectedGradeLevel === "" || data.status !== "Completed"}>
            Confirm
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}