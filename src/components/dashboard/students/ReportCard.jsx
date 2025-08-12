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
const gradesData = [
 {
  grade: "Grade 7 Seeping",
  schoolYear: "2022-2023",
  subject: "Math 101",
  teacher: "Mr. Mel Moses Seeping",
  adviser: "Mr. Mel Moses Seeping", // class adviser
  grades: [95, 90, 88, 85],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 7 Seeping",
  schoolYear: "2022-2023",
  subject: "Biology",
  teacher: "Ms. Angela Marie Guanio",
  adviser: "Mr. Mel Moses Seeping",
  grades: [91, 75, 88, 90],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 7 Seeping",
  schoolYear: "2022-2023",
  subject: "Basic English",
  teacher: "Mr. Czianel Santos",
  adviser: "Mr. Mel Moses Seeping",
  grades: [91, 85, 78, 94],
  finalGrade: 0,
  remarks: "Passed",
 },
 
  {
  grade: "Grade 8 Guanio",
  schoolYear: "2023-2024",
  subject: "Algebra",
  teacher: "Mr. Mel Moses Seeping",
  adviser: "Ms. Angela Marie Guanio", 
  grades: [91, 92, 83, 89],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 8 Guanio",
  schoolYear: "2023-2024",
  subject: "Physics",
  teacher: "Ms. Angela Marie Guanio",
  adviser: "Ms. Angela Marie Guanio", // class adviser
  grades: [99, 88, 88, 93],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 8 Guanio",
  schoolYear: "2023-2024",
  subject: "Grammar",
  teacher: "Mr. Czianel Santos",
  adviser: "Ms. Angela Marie Guanio", 
  grades: [79, 98, 85, 88],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 9 Santos",
  schoolYear: "2024-2025",
  subject: "Geometry",
  teacher: "Mr. Mel Moses Seeping",
  adviser: "Mr. Czianel Santos", 
  grades: [97, 87, 92, 91],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 9 Santos",
  schoolYear: "2024-2025",
  subject: "Chemistry",
  teacher: "Ms. Angela Marie Guanio",
  adviser: "Mr. Czianel Santos", 
  grades: [82, 93, 99, 89],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 9 Santos",
  schoolYear: "2024-2025",
  subject: "Punctuation",
  teacher: "Mr. Czianel Santos",
  adviser: "Mr. Czianel Santos", // class adviser
  grades: [100, 90, 93, 95],
  finalGrade: 0,
  remarks: "Passed",
 },
 {
  grade: "Grade 10 MMARCC",
  schoolYear: "2025-2026",
  subject: "Trigonometry",
  teacher: "Mr. Mel Moses Seeping",
  adviser: "Mr. Mark Robert Bayudang", // class adviser
  grades: [95, 90, 88, 85],
  finalGrade: 0,
  remarks: "Passed",
 },
  {
  grade: "Grade 10 MMARCC",
  schoolYear: "2025-2026",
  subject: "Astrology",
  teacher: "Ms. Angela Marie Guanio",
  adviser: "Mr. Mark Robert Bayudang", 
  grades: [93, 92, 81, 89],
  finalGrade: 0,
  remarks: "Passed",
 },

 {
  grade: "Grade 10 MMARCC",
  schoolYear: "2025-2026",
  subject: "Advance English",
  teacher: "Mr. Czianel Santos",
  adviser: "Mr. Mark Robert Bayudang", 
  grades: [99, 92, 87, 85],
  finalGrade: 0,
  remarks: "Passed",
 }
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
