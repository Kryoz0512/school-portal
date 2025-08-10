import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

export default function Section() {

  const [section, setSection] = useState("")

  return (
    <div className='flex flex-1 flex-col p-4 gap-3'>
      <div className="flex justify-end">

      </div>

      <Card>
        <CardHeader>
          <CardAction>
            <Select onValueChange={setSection} value={section}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Section</SelectLabel>
                  <SelectItem value="Grade7Seeping">Grade 7 Seeping</SelectItem>
                  <SelectItem value="Grade7Berber">Grade 7 Berber</SelectItem>
                  <SelectItem value="Grade8Tejano">Grade 8 Tejano</SelectItem>
                  <SelectItem value="Grade8Guanio">Grade 8 Guanio</SelectItem>
                  <SelectItem value="Grade9Santos">Grade 9 Santos</SelectItem>
                  <SelectItem value="Grade9Bayudang">Grade 9 Bayudang</SelectItem>
                  <SelectItem value="Grade10MMACC">Grade 10 MMACC</SelectItem>
                  <SelectItem value="Grade10MMARCC">Grade 10 MMARCC</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardAction>
          <CardTitle>Grade & Section</CardTitle>
          <CardDescription>
            Grade Level: {section.replace(/([a-zA-Z])(\d)/, '$1 $2').replace(/(\d)([A-Za-z])/, '$1 $2')}
          </CardDescription>
          <CardDescription>Subjects Assigned: Math 101 & Science 101</CardDescription>
        </CardHeader>
        <CardContent>
          {section ? "Students" : "No section selected."}
        </CardContent>
      </Card>
    </div >
  )
}
