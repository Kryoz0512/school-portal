import AdminAddSectionDialog from "./AdminAddSectionDialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
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
import { Trash2, Pencil, SquarePen } from "lucide-react"

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

export const sectionData = [
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


export default function ManageSections() {

  const defaultFilter = "All"
  const [selectedSectionFilter, setSelectedSectionFilter] = useState(defaultFilter)
  const filteredSectionData = sectionData.filter(
    item => {
      const filterByGrade = selectedSectionFilter === defaultFilter || item.grade === Number(selectedSectionFilter)

      return filterByGrade
    }
  )

  return (
    <div className="flex flex-1 flex-col p-4 gap-3 space-y-4">
      {/* add section dialog */}
      <div className="flex w-full gap-3 justify-end">
        <Select
          onValueChange={setSelectedSectionFilter}
          value={selectedSectionFilter}
          defaultValue={selectedSectionFilter}
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
        <AdminAddSectionDialog />
      </div>

      {/* section table */}
      <Card>
        <CardHeader>
          <CardTitle className="">Sections</CardTitle>
        </CardHeader>
        <CardContent>
          {/* table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Grade Level</TableHead>
                <TableHead>Section Name</TableHead>
                <TableHead>Adviser</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                filteredSectionData.length > 0 ? (
                  filteredSectionData.map(
                    (item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">Grade {item.grade}</TableCell>
                          <TableCell>{item.section}</TableCell>
                          <TableCell>{item.adviser}</TableCell>
                          <TableCell className="flex justify-end gap-4">
                            <AdminEditDialogSection data={item} />
                            <AdminAlertDialogSection />
                          </TableCell>
                        </TableRow>
                      )
                    }
                  )
                ) : (
                  <TableRow>
                    <TableCell className="font-medium" colSpan={4}>No Data</TableCell>
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

// AdminAlertDialogSection
function AdminAlertDialogSection() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive"><Trash2 /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the section.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// AdminEditDialogSection
function AdminEditDialogSection({ data }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><SquarePen /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          {/* grade level */}
          <div className="mb-3 space-y-3">
            <Label htmlFor="gradeLevel">Grade Level</Label>
            <Select defaultValue={String(data.grade)}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select Grade Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Grade 7</SelectItem>
                <SelectItem value="8">Grade 8</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* adviser */}
          <div className="mb-3 space-y-3">
            <Label htmlFor="sectionAdviser">Section Adviser</Label>
            <Select defaultValue={data.adviser}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select Section Adviser" />
              </SelectTrigger>
              <SelectContent>
                {
                  sectionData.length > 0 && (
                    sectionData.map(
                      (item, index) => {
                        return (
                          <SelectItem key={index} value={item.adviser}>Prof. {item.adviser}</SelectItem>
                        )
                      }
                    )
                  )
                }
              </SelectContent>
            </Select>
          </div>

          {/* grade section */}
          <div className="mb-3 space-y-3">
            <Label htmlFor="sectionName">Section</Label>
            <Input
              id="sectionName"
              name="sectionName"
              placeholder="ex. Saturn"
              value={data.section}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}