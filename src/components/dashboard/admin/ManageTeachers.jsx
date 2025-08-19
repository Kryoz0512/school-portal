import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Card,
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
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil, SquarePen, Trash2 } from "lucide-react";


const teachersData = [
  {
    firstname: "Mark",
    lastname: "Bayudang",
    middlename: "Dela Cruz",
    gender: "Male",
    idnumber: "0015-2021",
    subject: "MAPEH",
    section: "Grade 10 MMARCC",
    rank: "Master Teacher I"
  },
  {
    firstname: "Mel",
    lastname: "Seeping",
    middlename: "Mag-isa",
    gender: "Male",
    idnumber: "0015-2019",
    subject: "Math",
    section: "Grade 7 Seeping",
    rank: "Master Teacher IV"
  },
];

export default function ManageTeachers() {
  const [teachers, setTeachers] = useState(teachersData);
  const [filterSubject, setFilterSubject] = useState("All");
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    gender: "",
    idnumber: "",
    subject: "",
    section: "",
    rank: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    setTeachers([...teachers, formData]);
    setFormData({
      firstname: "",
      lastname: "",
      middlename: "",
      gender: "",
      idnumber: "",
      subject: "",
      section: "",
      rank: ""
    });
  };

  const [editTeacher, setEditTeacher] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    gender: "",
    idnumber: "",
    subject: "",
    section: "",
    rank: ""
  });

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const openEditDialog = (index) => {
    setEditTeacher(index);
    setEditFormData(teachers[index]);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updated = [...teachers];
    updated[editTeacher] = editFormData;
    setTeachers(updated);
    setEditTeacher(null);
  };

  // const filteredTeachers =
  //   filterSubject === "All"
  //     ? teachers
  //     : teachers.filter((teacher) => teacher.subject === filterSubject);

  const filteredTeachers = teachers.filter(
    item => {
      const filterBySubject = filterSubject === "All" || item.subject === filterSubject
      const filterBySearch = search === "" || item.firstname.toLowerCase().includes(search.toLowerCase()) || item.middlename.toLowerCase().includes(search.toLowerCase()) || item.lastname.toLowerCase().includes(search.toLowerCase()) || item.idnumber.toLowerCase().includes(search.toLowerCase())
      return filterBySubject & filterBySearch
    }
  )

  return (
    <div className="flex flex-1 flex-col p-4 gap-3 space-y-4 ">

      <div className="flex justify-end gap-2">
        <Input className="w-1/2" placeholder="Search by Name" onChange={(event) => { setSearch(event.target.value) }} />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Pencil /></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Teacher</DialogTitle>
              <DialogDescription>Personal Information</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleAddTeacher}>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-4">
                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">First Name</Label>
                    <Input id="firstname" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">Last Name</Label>
                    <Input id="lastname" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">Middle Name</Label>
                    <Input id="middlename" name="middlename" placeholder="Middle Name" value={formData.middlename} onChange={handleChange} />
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        setFormData({ ...formData, gender: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <DialogDescription>Teaching Information</DialogDescription>
                <div className="grid grid-cols-4 gap-4">

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">ID Number</Label>
                    <Input id="idnumber" name="idnumber" placeholder="ID" value={formData.idnumber} onChange={handleChange} />
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="section">Section</Label>
                    <Select
                      value={formData.section}
                      onValueChange={(value) =>
                        setFormData({ ...formData, section: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grade 10 MMARCC">Grade 10 MMARCC</SelectItem>
                        <SelectItem value="Grade 7 Seeping">Grade 7 Seeping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-3 space-y-3">
                    <Label htmlFor="">Rank</Label>
                    <Input id="rank" name="rank" placeholder="Rank" value={formData.rank} onChange={handleChange} />
                  </div>

                </div>

              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="submit">
                    Add
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Select
          value={filterSubject}
          onValueChange={setFilterSubject}
          defaultValue={filterSubject}
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Filter by Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="MAPEH">MAPEH</SelectItem>
            <SelectItem value="Math">Math</SelectItem>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Science">Science</SelectItem>
          </SelectContent>
        </Select>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>Manage Teacher</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Number</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Middle Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher, index) => (
                <TableRow key={index}>
                  <TableCell>{teacher.idnumber}</TableCell>
                  <TableCell>{teacher.firstname}</TableCell>
                  <TableCell>{teacher.lastname}</TableCell>
                  <TableCell>{teacher.middlename}</TableCell>
                  <TableCell>{teacher.gender}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.section}</TableCell>
                  <TableCell>{teacher.rank}</TableCell>
                  <TableCell className="flex gap-3">
                    <Dialog onOpenChange={(open) => { if (open) openEditDialog(index); }}>
                      <DialogTrigger asChild>
                        <Button variant="outline"><SquarePen /></Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-5xl">
                        <DialogHeader>
                          <DialogTitle>Edit Teacher Profile</DialogTitle>
                          <DialogDescription>Personal Information</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSaveEdit}>
                          <div className="flex flex-col gap-2">
                            {/* Personal Information */}
                            <div className="grid grid-cols-4 gap-4">
                              <div className="mb-3 space-y-3">
                                <Label htmlFor="firstname">First Name</Label>
                                <Input id="firstname" name="firstname" placeholder="First Name" value={editFormData.firstname} onChange={handleEditChange} />
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input id="lastname" name="lastname" placeholder="Last Name" value={editFormData.lastname} onChange={handleEditChange} />
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="middlename">Middle Name</Label>
                                <Input id="middlename" name="middlename" placeholder="Middle Name" value={editFormData.middlename} onChange={handleEditChange} />
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="gender">Gender</Label>
                                <Select
                                  value={editFormData.gender}
                                  onValueChange={(value) =>
                                    setEditFormData({ ...editFormData, gender: value })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                            </div>

                            {/* Teaching Information */}
                            <DialogDescription>Teaching Information</DialogDescription>
                            <div className="grid grid-cols-4 gap-4">
                              <div className="mb-3 space-y-3">
                                <Label htmlFor="idnumber">ID Number</Label>
                                <Input id="idnumber" name="idnumber" placeholder="ID" value={editFormData.idnumber} onChange={handleEditChange} />
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" name="subject" placeholder="Subject" value={editFormData.subject} onChange={handleEditChange} />
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="section">Section</Label>
                                <Select
                                  value={editFormData.section}
                                  onValueChange={(value) =>
                                    setEditFormData({ ...editFormData, section: value })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Grade 10 MMARCC">Grade 10 MMARCC</SelectItem>
                                    <SelectItem value="Grade 7 Seeping">Grade 7 Seeping</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="mb-3 space-y-3">
                                <Label htmlFor="rank">Rank</Label>
                                <Input id="rank" name="rank" placeholder="Rank" value={editFormData.rank} onChange={handleEditChange} />
                              </div>
                            </div>
                          </div>
                          <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                Cancel
                              </Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button type="submit">
                                Save Changes
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <AdminAlertDialogTeachers />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// AdminAlertDialogTeachers
function AdminAlertDialogTeachers() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive"><Trash2 /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the teacher.
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