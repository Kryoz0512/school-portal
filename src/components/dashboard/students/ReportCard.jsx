import React, { useState } from "react";
import {
 Card,
 CardAction,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
 TableCaption,
} from "@/components/ui/table";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import ReportCardDialog from "./ReportCardDialog";

const studentData = {
 name: "John Doe",
 studentID: "22-1090-11",
};

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

const gradesData = [
 {
  grade: "Grade 7 Seeping",
  schoolYear: "2022-2023",
  subject: "Mathematics",
  teacher: "Mr. Mel Moses Seeping",
  adviser: "Mr. Mel Moses Seeping", // class adviser
  grades: [95, 90, 88, 85],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 8 Guanio",
  schoolYear: "2023-2024",
  subject: "Mathematics",
  teacher: "Ms. Angela Marie Guanio",
  adviser: "Ms. Angela Marie Guanio", // class adviser
  grades: [79, 75, 88, 90],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 9 Santos",
  schoolYear: "2024-2025",
  subject: "Science",
  teacher: "Mr. Czianel Santos",
  adviser: "Mr. Czianel Santos", // class adviser
  grades: [90, 80, 90, 90],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 10 MMARCC",
  schoolYear: "2025-2026",
  subject: "MAPEH",
  teacher: "Mr. Mark Robert Bayudang",
  adviser: "Mr. Mark Robert Bayudang", // class adviser
  grades: [95, 90, 88, 85],
  finalGrade: 0,
  remarks: "Passed",
 },
];

function ReportCard() {
 const currentYear = "2025-2026";
 const [selectedSchoolYear, setSelectedSchoolYear] = useState(currentYear);

 const fileteredGrades = gradesData.filter(
  (item) => item.schoolYear == selectedSchoolYear
 );

 const updatedGradesData = fileteredGrades.map((item) => {
  const averageGrade =
   item.grades.reduce((a, b) => a + b, 0) / item.grades.length;
  return {
   ...item,
   finalGrade: Number(averageGrade.toFixed(2)),
  };
 });

 const overAllGrades =
  updatedGradesData.reduce((a, b) => a + b.finalGrade, 0) /
  updatedGradesData.length;

 return (
  <>
   <div className="flex justify-center flex-1 flex-col p-4">
    <Card>
     <CardHeader>
      <CardAction className="flex gap-4">
       <ReportCardDialog />
       <Select
        onValueChange={setSelectedSchoolYear}
        value={selectedSchoolYear}
        defaultValue={selectedSchoolYear}
       >
        <SelectTrigger className="w-fit">
         <SelectValue placeholder="School Year" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="2022-2023">2022-2023</SelectItem>
         <SelectItem value="2023-2024">2023-2024</SelectItem>
         <SelectItem value="2024-2025">2024-2025</SelectItem>
         <SelectItem value="2025-2026">2025-2026</SelectItem>
        </SelectContent>
       </Select>
      </CardAction>
      <CardTitle>Student Report Card</CardTitle>
      <CardDescription>Name: {studentData.name}</CardDescription>
      <CardDescription>Student ID: {studentData.studentID}</CardDescription>
      <CardDescription>School Year: {selectedSchoolYear}</CardDescription>
      <CardDescription>
       Grade & Section:{" "}
       {updatedGradesData.length > 0 ? updatedGradesData[0].grade : "N/A"}
      </CardDescription>
      <CardDescription>
       Adviser:{" "}
       {updatedGradesData.length > 0 ? updatedGradesData[0].adviser : "N/A"}
      </CardDescription>
     </CardHeader>
     <CardContent>
      <Table>
       {updatedGradesData.length > 0 && (
        <TableCaption>
         General Average: {Number(overAllGrades).toFixed(2)}
        </TableCaption>
       )}
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
        {updatedGradesData.length > 0 ? (
         updatedGradesData.map((item) => (
          <TableRow key={item.subject}>
           <TableCell>{item.subject}</TableCell>
           {item.grades.map((item, index) => (
            <TableCell key={index} className="text-center">
             {item}
            </TableCell>
           ))}
           <TableCell className="text-center">{item.finalGrade}</TableCell>
           <TableCell>{item.teacher}</TableCell>
           <TableCell
            className={`${
             item.remarks === "Passed" ? "text-green-500" : "text-red-500"
            } font-medium`}
           >
            {item.remarks}
           </TableCell>
          </TableRow>
         ))
        ) : (
         <TableRow>
          <TableCell colSpan={8} className="text-center font-bold">
           No Data.
          </TableCell>
         </TableRow>
        )}
       </TableBody>
      </Table>
     </CardContent>
    </Card>
   </div>
  </>
 );
}

export default ReportCard;
