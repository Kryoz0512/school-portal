import { useState } from "react"
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const subjects = [
  {
    subject: "Mathematics"
  },
  {
    subject: "Science"
  },
  {
    subject: "English"
  },
  {
    subject: "Filipino"
  },
  {
    subject: "Makabayan"
  },
  {
    subject: "MAPEH"
  },
]

const sections = [
  {
    grade: 7,
    section: "Seeping",
    adviser: "Mel Moses Seeping",
  },
  {
    grade: 7,
    section: "Berber",
    adviser: "Carmel Loresiane Berber",
  },
  {
    grade: 8,
    section: "Guanio",
    adviser: "Angela Marie Guanio",
  },
  {
    grade: 8,
    section: "Tejano",
    adviser: "Michael Jay Angelo Tejano",
  },
  {
    grade: 9,
    section: "Santos",
    adviser: "Czianel Santos",
  },
  {
    grade: 9,
    section: "Bayudang",
    adviser: "Mark Robert Bayudang",
  },
  {
    grade: 10,
    section: "MMACC",
    adviser: "Jover Daracan",
  },
  {
    grade: 10,
    section: "MMARCC",
    adviser: "Justine Cedric Ocampo",
  },

]

const tableHead = [
  "Time",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
]

const schedules = [
  {
    grade: 7,
    section: "Seeping",
    adviser: "Mel Moses Seeping",
    schdule: [
      {
        time: "8:30 - 9:30",
        Monday: { subject: 'Mathematics' },
        Tuesday: { subject: 'MAPEH' },
        Wednesday: { subject: 'English' },
        Thursday: { subject: 'Makabayan' },
        Friday: { subject: 'Science' }
      },
      {
        time: "9:30 - 10:30",
        Monday: { subject: 'English' },
        Tuesday: { subject: 'Mathematics', },
        Wednesday: { subject: 'MAPEH' },
        Thursday: { subject: 'Science' },
        Friday: { subject: 'Makabayan' }
      },
      {
        time: "10:30 - 11:30",
        Monday: { subject: 'Science' },
        Tuesday: { subject: 'English' },
        Wednesday: { subject: 'Mathematics' },
        Thursday: { subject: 'Makabayan' },
        Friday: { subject: 'MAPEH' }
      },
    ]
  },
]

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
]

export default function ManageSchedule() {

  const [selectedSection, setSelectedSection] = useState("")

  const filteredSchedules = schedules.filter(
    (item) => {
      const gradeAndSection = `${item.grade} ${item.section}`
      const filterBySection = gradeAndSection === selectedSection
      return filterBySection
    }
  )


  return (
    <div className="flex flex-1 flex-col p-4 gap-3 space-y-4">
      {/* select filter */}
      <div className="w-full flex flex-col items-end">
        <Select
          onValueChange={setSelectedSection}
          value={selectedSection}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Section" />
          </SelectTrigger>
          <SelectContent>
            {
              sections && sections.map(
                (item, index) => {
                  return (
                    <SelectItem key={index} value={`${item.grade} ${item.section}`}>{`${item.grade} ${item.section}`}</SelectItem>
                  )
                }

              )
            }
          </SelectContent>
        </Select>
      </div>

      {/* card and table */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Schedule</CardTitle>
          <CardDescription>Grade: {selectedSection || "Select Grade and Section"}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {filteredSchedules.length > 0 ? null : <TableCaption>Select Grade and Section</TableCaption>}
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>

                {
                  days && days.map(
                    (day, index) => {
                      return (
                        <TableHead key={index}>{day}</TableHead>
                      )
                    }
                  )
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                filteredSchedules && filteredSchedules.map(
                  (item) => (
                    item.schdule.map(
                      (sched, index) => (
                        <TableRow key={index}>
                          <TableCell>{sched.time}</TableCell>
                          {
                            days.map(
                              (day) => (
                                <TableCell key={day}>
                                  <SelectSubject value={sched[day].subject} />
                                </TableCell>
                              )
                            )
                          }
                        </TableRow>
                      )
                    )
                  )
                )
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


function SelectSubject({ value }) {

  const [selectedSubject, setSelectedSubject] = useState(value)

  const filteredSubject = subjects.filter(
    subject => {
      const filterBySubject = subject.subject !== selectedSubject
      return filterBySubject
    }
  )

  return (
    <Select
      onValueChange={setSelectedSubject}
      value={selectedSubject}
      defaultValue={value}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={selectedSubject} disabled>{selectedSubject}</SelectItem>
        {
          filteredSubject && filteredSubject.map(
            (item, index) => {
              return (
                <SelectItem key={index} value={item.subject}>{item.subject}</SelectItem>
              )
            }

          )
        }
      </SelectContent>
    </Select>
  )
}