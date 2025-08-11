import React, { useEffect, useMemo, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
  TableCaption
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ReportCardDialog from './ReportCardDialog';

const studentData = {
  name: "Juan Dela Cruz",
  studentId: "2024-0001",
  gradeLevel: "Grade 7",
  section: "Einstein",
  schoolYear: "2024-2025",
  adviser: "Mrs. Maria Santos",
  isCurrentYear: true,
};


const gradesData = [
  {
    grade: 10,
    schoolYear: "2024-2025",
    subject: "Mathematics",
    teacher: "Mr. Maria Roberta Bayutdang",
    grades: [79, 75, 88, 90],
    firstQuarter: 79,
    secondQuarter: 75,
    thirdQuarter: 88,
    fourthQuarter: 90,
    finalGrade: 0,
    remarks: "Passed"
  },
  // {
  //   grade: 9,
  //   schoolYear: "2024-2025",
  //   subject: "Science",
  //   teacher: "Ms. Andrei Nico Samonte",
  //   firstQuarter: 85,
  //   secondQuarter: 70,
  //   thirdQuarter: 86,
  //   fourthQuarter: 70,
  //   finalGrade: 0,
  //   remarks: "Passed"
  // },
  // {
  //   grade: 9,
  //   schoolYear: "2024-2025",
  //   subject: "Science",
  //   teacher: "Ms. Andrei Nico Samonte",
  //   firstQuarter: 85,
  //   secondQuarter: 70,
  //   thirdQuarter: 86,
  //   fourthQuarter: 70,
  //   finalGrade: 0,
  //   remarks: "Passed"
  // },
]


function ReportCard() {

  const [schoolYear, setSchoolYear] = useState("2024-2025")
  // const [genAverage, setGenAverage] = useState([]);

  // function addGenAverageMemo(average){
  //   const newArr = [...genAverage, average]

  //   console.log(newArr);

  //   setGenAverage(newArr);
  // }

  return (
    <>
      <div className="flex justify-center flex-1 flex-col p-4">
        <Card>
          <CardHeader>
            <CardAction className="flex gap-4">
              <ReportCardDialog />
              <Select onValueChange={setSchoolYear} value={schoolYear} defaultValue={schoolYear}>
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="School Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-2025">
                    2024-2025
                  </SelectItem>
                  <SelectItem value="2025-2026">2025-2026</SelectItem>
                  <SelectItem value="2026-2027">2026-2027</SelectItem>
                </SelectContent>
              </Select>
            </CardAction>
            <CardTitle>
              Student Report Card
            </CardTitle>
            <CardDescription>
              Name: {studentData.name}
            </CardDescription>
            <CardDescription>
              Student ID: {studentData.studentId}
            </CardDescription>
            <CardDescription>
              Grade & Section: {studentData.gradeLevel}  {studentData.section}
            </CardDescription>
            <CardDescription>
              School Year: {schoolYear}
            </CardDescription>
            <CardDescription>
              Adviser: {studentData.adviser}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>

              {
                studentData.schoolYear === schoolYear ? (
                  // <TableCaption className="text-lg">General Average: {studentData.schoolYear === schoolYear && calculateAverage(gradesData)}</TableCaption>
                  <TableCaption className="text-lg">General Average: { }</TableCaption>
                ) : ""
              }
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">1st</TableHead>
                  <TableHead className="text-center">2nd</TableHead>
                  <TableHead className="text-center">3rd</TableHead>
                  <TableHead className="text-center">4th</TableHead>
                  <TableHead className="text-center">Final Average</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentData.schoolYear === schoolYear ? (gradesData.map((grade, index) => {
                  const subjectAve = grade.grades.reduce((a, b) => a + b, 0) / grade.grades.length

                  // useMemo(() => addGenAverageMemo(average), [average]);

                  return (
                    grade.schoolYear === schoolYear && (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{grade.subject}</TableCell>
                        {
                          grade.grades.map((g) => {
                            return (
                              <TableCell key={g} className="text-center">{g}</TableCell>

                            )
                          })
                        }
                        <TableCell className="text-center">{subjectAve}</TableCell>
                        {/* <TableCell className="text-center">{calculateAverage()}</TableCell> */}
                        <TableCell className="">{grade.teacher}</TableCell>
                        <TableCell className={`${grade.remarks === "Passed" ? "text-green-600" : "text-red-600"} font-medium`}>
                          {grade.remarks}
                        </TableCell>
                      </TableRow>

                    )
                  )
                })) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center">
                      No Data
                    </TableCell>
                  </TableRow>
                )
                }
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ReportCard;
