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
    id: "2024-001",
    name: "Mike Schmidt",
    section: "Grade 7 Seeping",
    year: "2024-2025",
    subject: "Basic English",
    grades: {
      Q1: "90",
      Q2: "88",
      Q3: "92",
      Q4: "91"
    }
  },

    {
    id: "2024-002",
    name: "Bangalore",
    section: "Grade 7 Berber",
    year: "2024-2025",
    subject: "Basic English",
    grades: {
      Q1: "93",
      Q2: "84",
      Q3: "98",
      Q4: "95"
    }
  },
  
  
  {
    id: "2025-001",
    name: "Elizabeth Afton",
    section: "Grade 8 Guanio",
    year: "2025-2026",
    subject: "Grammar",
    grades: {
      Q1: "95",
      Q2: "93",
      Q3: "96",
      Q4: "94"
    }
  },
  {
    id: "2025-002",
    name: "John Cena",
    section: "Grade 8 Tejano",
    year: "2025-2026",
    subject: "Grammar",
    grades: {
      Q1: "92",
      Q2: "91",
      Q3: "90",
      Q4: "99"
    }
  },

    {
    id: "2026-001",
    name: "Cici",
    section: "Grade 9 Bayudang",
    year: "2026-2027",
    subject: "Punctuation",
    grades: {
      Q1: "88",
      Q2: "87",
      Q3: "78",
      Q4: "98"
    }
  },

  {
    id: "2026-002",
    name: "Riven",
    section: "Grade 9 Santos",
    year: "2026-2027",
    subject: "Punctuation",
    grades: {
      Q1: "98",
      Q2: "97",
      Q3: "88",
      Q4: "97"
    }
  },

     {
    id: "2026-003",
    name: "Michael Jordan",
    section: "Grade 9 Santos",
    year: "2026-2027",
    subject: "Punctuation",
    grades: {
      Q1: "98",
      Q2: "97",
      Q3: "88",
      Q4: "97"
    }
  },   
  {
    id: "2027-001",
    name: "Michael Jackson",
    section: "Grade 10 MMARCC",
    year: "2027-2028",
    subject: "Advance English",
    grades: {
      Q1: "93",
      Q2: "95",
      Q3: "97",
      Q4: "87"
    }
  },
  {
    id: "2027-002",
    name: "Billie Eilish",
    section: "Grade 10 MMACC",
    year: "2027-2028",
    subject: "Advance English",
    grades: {
      Q1: "92",
      Q2: "95",
      Q3: "91",
      Q4: "96"
    }
  }
];

const quarters = ["Q1", "Q2", "Q3", "Q4"];
const isMaintenance = false;

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
    setEditedValue(students[studentIndex].grades[field]);
  };

  const handleSave = () => {
    const updatedStudents = [...students];
    updatedStudents[selectedCell.studentIndex].grades[selectedCell.field] = editedValue;
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
// kung ano ung nakalagay sa  json na year and section, un din dapat andto
  const selectOptions = [

    { label: "Grade 7 Berber", year: "2024-2025", section: "Grade 7 Berber" },
    { label: "Grade 7 Seeping", year: "2024-2025", section: "Grade 7 Seeping" },
    { label: "Grade 8 Guanio", year: "2025-2026", section: "Grade 8 Guanio" },
    { label: "Grade 9 Santos", year: "2026-2027", section: "Grade 9 Santos" },
    { label: "Grade 9 Bayudang", year: "2026-2027", section: "Grade 9 Bayudang" },
    { label: "Grade 10 MMARC", year: "2027-2028", section: "Grade 10 MMARCC" },
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

      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>Manage Students</CardTitle>
            <CardDescription>Grades per Quarter</CardDescription>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>SUBJECT</TableHead>
                {quarters.map((quarter) => (
                  <TableHead key={quarter}>{quarter}</TableHead>
                ))}
                <TableHead>AVERAGE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  {quarters.map((quarter) => (
                    <TableCell
                      key={quarter}
                      onClick={() => handleCellClicked(index, q)}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      {student.grades[quarter]}
                    </TableCell>
                  ))}
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
              <DialogDescription>Update the grade for the selected quarter.</DialogDescription>
            </DialogHeader>
            <Input
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <div className='flex gap-4 mt-4'>
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
