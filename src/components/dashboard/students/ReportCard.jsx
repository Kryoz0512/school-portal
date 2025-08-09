import React from 'react'
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
import ReportCardDialog from './ReportCardDialog';
import SelectSchoolYear from './SelectSchoolYear';

const studentData = {
  name: "Juan Dela Cruz",
  studentId: "2024-0001",
  gradeLevel: "Grade 10",
  section: "Einstein",
  schoolYear: "2024-2025",
  adviser: "Mrs. Maria Santos"
};

const gradesData = [
  {
    subject: "Mathematics",
    teacher: "Mr. Maria Roberta Bayutdang",
    firstQuarter: 89,
    secondQuarter: 91,
    thirdQuarter: 88,
    fourthQuarter: 90,
    finalGrade: 89.5,
    remarks: "Passed"
  },
  {
    subject: "Science",
    teacher: "Ms. Andrei Nico Samonte",
    firstQuarter: 85,
    secondQuarter: 70,
    thirdQuarter: 86,
    fourthQuarter: 70,
    finalGrade: 90,
    remarks: "Passed"
  },
  {
    subject: "English",
    teacher: "Mrs. Czianel Santos",
    firstQuarter: 92,
    secondQuarter: 70,
    thirdQuarter: 90,
    fourthQuarter: 70,
    finalGrade: 90,
    remarks: "Passed"
  },
  {
    subject: "Filipino",
    teacher: "Ms. Reiner Panelo",
    firstQuarter: 88,
    secondQuarter: 85,
    thirdQuarter: 87,
    fourthQuarter: 89,
    finalGrade: 90,
    remarks: "Passed"
  },
  {
    subject: "Social Studies",
    teacher: "Mr. Carmel Berber",
    firstQuarter: 83,
    secondQuarter: 85,
    thirdQuarter: 82,
    fourthQuarter: 84,
    finalGrade: 90,
    remarks: "Passed"
  },
  {
    subject: "Physical Education",
    teacher: "Mr. Angela Guanio",
    firstQuarter: 95,
    secondQuarter: 93,
    thirdQuarter: 94,
    fourthQuarter: 96,
    finalGrade: 90,
    remarks: "Passed"
  },
  {
    subject: "Music",
    teacher: "Ms. Jeff Cocjin",
    firstQuarter: 90,
    secondQuarter: 92,
    thirdQuarter: 89,
    fourthQuarter: 91,
    finalGrade: 80.5,
    remarks: "Passed"
  }
];

function calculateAverage(grades) {
  const sum = grades.reduce((acc, curr) => acc + curr.finalGrade, 0);
  return (sum / grades.length).toFixed(2);
}

function ReportCard() {


  return (
    <>
      <div className="flex justify-center flex-1 flex-col p-4">
        <Card>
          <CardHeader>
            <CardAction className="flex gap-4">
              <ReportCardDialog />
              <SelectSchoolYear />
            </CardAction>
            <CardTitle>
              Student Report Card
            </CardTitle>
            <CardDescription>
              Name: {studentData.studentId}
            </CardDescription>
            <CardDescription>
              Student ID: {studentData.name}
            </CardDescription>
            <CardDescription>
              Grade & Section: {studentData.gradeLevel}
            </CardDescription>
            <CardDescription>
              School Year: {studentData.schoolYear}
            </CardDescription>
            <CardDescription>
              Adviser: {studentData.adviser}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption className="text-lg">General Average: {calculateAverage(gradesData)}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">1st</TableHead>
                  <TableHead className="text-center">2nd</TableHead>
                  <TableHead className="text-center">3rd</TableHead>
                  <TableHead className="text-center">4th</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesData.map((grade, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{grade.subject}</TableCell>
                    <TableCell className="text-center">{grade.firstQuarter}</TableCell>
                    <TableCell className="text-center">{grade.secondQuarter}</TableCell>
                    <TableCell className="text-center">{grade.thirdQuarter}</TableCell>
                    <TableCell className="text-center">{grade.fourthQuarter}</TableCell>
                    <TableCell className="">{grade.teacher}</TableCell>
                    <TableCell className={`${grade.remarks === "Passed" ? "text-green-600" : "text-red-600"} font-medium`}>
                      {grade.remarks}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ReportCard;
