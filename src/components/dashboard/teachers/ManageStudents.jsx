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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const trialStudents = [
  {
    id: "2025001",
    name: "Mike Schmidt",
    section: "Grade 7 - Section Santos",
    year: "2024-2025",
    subject: "English",
    grades: {
      Q1: "90",
      Q2: "88",
      Q3: "92",
      Q4: "91"
    }
  },
  {
    id: "2025002",
    name: "Elizabeth Afton",
    section: "Grade 7 - Section Seeping",
    year: "2024-2025",
    subject: "English",
    grades: {
      Q1: "95",
      Q2: "93",
      Q3: "96",
      Q4: "94"
    }
  }
];

const quarters = ["Q1", "Q2", "Q3", "Q4"];
const isMaintenance = false

export default function TeacherManageStudents() {
  if (isMaintenance) {
    return <UnderMaintenance />
  }

  const [students, setStudents] = useState(trialStudents);
  const [selectedCell, setSelectedCell] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [selectedSection, setSelectedSection] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const handleCellClicked = (studentIndex, field) => {
    setSelectedCell({ studentIndex, field });
    setEditedValue(students[studentIndex][field]);
  };

  const handleSave = () => {
    const updatedStudents = [...students];
    updatedStudents[selectedCell.studentIndex][selectedCell.field] = editedValue;
    setStudents(updatedStudents);
    setSelectedCell(null);
  };

  const calculateAverage = (grades) => {
    const values = Object.values(grades).map(Number);
    const total = values.reduce((sum, val) => sum + val, 0);
    return (total / values.length).toFixed(2);
  };

  const filteredStudents = students.filter((student) => {
    const sectionMatch = selectedSection === "All" || student.section === selectedSection;
    const yearMatch = selectedYear === "All" || student.year === selectedYear;
    return sectionMatch && yearMatch;
  });

  const selectOptions = [
    { label: "All", year: "All", section: "All" },
    { label: "Grade 7 - Section Santos", year: "2024-2025", section: "Grade 7 - Section Santos" },
    { label: "Grade 7 - Section Seeping", year: "2024-2025", section: "Grade 7 - Section Seeping" },
  ];


  return (
    <div className="p-4 space-y-4">
      <div>
        <Select onValueChange={(value) => {
          const selected = selectOptions.find(opt => opt.label === value);
          setSelectedSection(selected.section);
          setSelectedYear(selected.year);
        }}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Section & Year" />
          </SelectTrigger>
          <SelectContent>
            {selectOptions.map((opt) => (
              <SelectItem key={opt.label} value={opt.label}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {quarters.map((quarter) => (
        <Card key={quarter}>
          <CardContent>
            <CardHeader>
              <CardTitle>Manage Students</CardTitle>
              <CardDescription>Quarter: {quarter}</CardDescription>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>NAME</TableHead>
                  <TableHead>SUBJECT</TableHead>
                  <TableHead>GRADE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.subject}</TableCell>
                    <TableCell onClick={() => handleCellClicked(index, "grade")}>{student.grades[quarter]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>Trial</CardTitle>
            <CardDescription>Trial Description</CardDescription>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>SUBJECT</TableHead>
                <TableHead>GRADE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  <TableCell>{calculateAverage(student.grades)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedCell && (
        <Dialog open={true} onOpenChange={() => setSelectedCell(null)}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit {selectedCell.field}</DialogTitle>
              <DialogDescription>TRIAL DESCRIPTION</DialogDescription>
            </DialogHeader>
            <Input
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <div className='flex gap-4'>
              <Button variant="outline" onClick={() => setSelectedCell(null)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
