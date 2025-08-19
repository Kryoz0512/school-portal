import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ManageEnrollment() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-center text-xl uppercase">
                        Basic Education Early Registration Form
                    </CardTitle>
                    <CardDescription className="text-center text-sm text-muted-foreground">
                        Please fill out all required fields in capital letters.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* School Year & LRN */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* School Year */}
                        <div>
                            <Label htmlFor="schoolYearFrom" className="mb-1 block">School Year</Label>
                            <div className="flex gap-2">
                                <Input id="schoolYearFrom" name="schoolYearFrom" placeholder="From" onChange={handleChange} />
                                <span className="self-center">–</span>
                                <Input id="schoolYearTo" name="schoolYearTo" placeholder="To" onChange={handleChange} />
                            </div>
                        </div>

                        {/* LRN */}
                        <div>
                            <Label htmlFor="lrn" className="mb-1 block">Learner Reference No. (LRN)</Label>
                            <Input id="lrn" name="lrn" placeholder="If applicable" onChange={handleChange} />
                        </div>
                    </div>

                    {/* Grade Level */}
                    <div>
                        <Label className="mb-2">Grade Level to Enroll</Label>
                        <Input name="gradeLevel" onChange={handleChange} className="w-100" />
                    </div>
                    {/* Personal Info */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Learner's Personal Information</h2>

                        <div className="grid grid-cols-4 gap-4 mb-1">
                            <Label htmlFor="">Last Name</Label>
                            <Label htmlFor="">Given Name</Label>
                            <Label htmlFor="">Middle Name</Label>
                            <Label htmlFor="">Ext. Name (Optional)</Label>
                        </div>

                        {/* Inputs */}
                        <div className="grid grid-cols-4 gap-4">
                            <Input id="lastName" name="lastName" onChange={handleChange} placeholder="Last Name" />
                            <Input id="givenName" name="givenName" onChange={handleChange} placeholder="Given Name" />
                            <Input id="middleName" name="middleName" onChange={handleChange} placeholder="Middle Name" />
                            <Input id="extName" name="extName" onChange={handleChange} placeholder="Extension Name" />
                        </div>
                    </div>

                    {/* Birth Info */}
                    <div>
                        {/* Labels Row */}
                        <div className="grid grid-cols-4 gap-4 mb-1">
                            <Label htmlFor="">Birthdate</Label>
                            <Label htmlFor="">Age</Label>
                            <Label htmlFor="">Sex</Label>
                            <Label htmlFor="">Religion</Label>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <Input id="birthdate" type="date" name="birthdate" onChange={handleChange} />
                            <Input id="age" name="age" placeholder="Age" onChange={handleChange} />

                            <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, sex: value }))}>
                                <SelectTrigger className="w-full" id="sex">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                </SelectContent>
                            </Select>

                            <Input id="religion" name="religion" placeholder="Religion" onChange={handleChange} />
                        </div>
                    </div>

                    {/* IP & PWD */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* IP Section */}
                        <div className="flex flex-col justify-between h-full border p-4 rounded-md">
                            <Label className="mb-2">
                                Belonging to any Indigenous Peoples (IP) / Indigenous Cultural Community?
                            </Label>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox name="ipNo" onChange={handleChange} />
                                    <span className="text-sm">No</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">If yes, specify:</span>
                                    <Input name="ipSpecify" onChange={handleChange} className="w-full sm:w-auto" />
                                </div>
                            </div>
                        </div>

                        {/* PWD Section */}
                        <div className="flex flex-col justify-between h-full border p-4 rounded-md">
                            <Label className="mb-2">Is the learner a person with disability (PWD)?</Label>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox name="pwdNo" onChange={handleChange} />
                                    <span className="text-sm">No</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">If yes, specify:</span>
                                    <Input name="pwdSpecify" onChange={handleChange} className="w-full sm:w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Current Address */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Current Address</h2>

                        {/* Labels */}
                        <div className="grid grid-cols-5 gap-4 mb-1">
                            <Label htmlFor="">House No.</Label>
                            <Label htmlFor="">Street</Label>
                            <Label htmlFor="">Barangay</Label>
                            <Label htmlFor="">City</Label>
                            <Label htmlFor="">Province</Label>
                        </div>

                        {/* Inputs */}
                        <div className="grid grid-cols-5 gap-4">
                            <Input name="houseNo" id="houseNo" placeholder="House No." onChange={handleChange} />
                            <Input name="street" id="street" placeholder="Street" onChange={handleChange} />
                            <Input name="barangay" id="barangay" placeholder="Barangay" onChange={handleChange} />
                            <Input name="city" id="city" placeholder="City" onChange={handleChange} />
                            <Input name="province" id="province" placeholder="Province" onChange={handleChange} />
                        </div>
                    </div>

                    {/* Parents/Guardians */}
                    {["Father", "Mother", "Guardian"].map((role, idx) => (
                        <div key={idx}>
                            <Label className="text-md mb-5">{role}'s Name</Label>
                            <div className="grid grid-cols-4 gap-4 mb-1">
                                <Label htmlFor="">Last Name</Label>
                                <Label htmlFor="">Given Name</Label>
                                <Label htmlFor="">Middle Name</Label>
                                <Label htmlFor="">Extn. Name (Optional)</Label>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-1">
                                <Input placeholder="Last Name" onChange={handleChange} />
                                <Input placeholder="Given Name" onChange={handleChange} />
                                <Input placeholder="Middle Name" onChange={handleChange} />
                                <Input placeholder="Extn. Name" onChange={handleChange} />
                            </div>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="flex gap-5">
                        <div>
                            <Label className="mb-2">Contact Number</Label>
                            <Input name="contactNumber" onChange={handleChange} />
                        </div>
                        <div>
                            <Label className="mb-2">Telephone Number (Optional)</Label>
                            <Input name="contactNumber" onChange={handleChange} />
                        </div>
                    </div>

                    {/* Dinagdag ko lang pede naman alisin */}
                    {/* Certification */}
                    <div className="text-sm text-muted-foreground">
                        <p className="mb-4">
                            I hereby certify that the above information is true and correct to the best of my knowledge. I allow the Department of Education to use my child's details for early registration data collection. This information will be treated as confidential in compliance with the Data Privacy Act of 2012.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="text-center">
                                <div className="border-t border-black w-64 mx-auto"></div>
                                <span className="text-xs">Signature Over Printed Name</span>
                            </div>
                            <div className="text-center">
                                <div className="border-t border-black w-40 mx-auto"></div>
                                <span className="text-xs">Date</span>
                            </div>
                        </div>
                    </div>
                    {/* Dinagdag ko lang pede naman alisin */}

                    <Button className="w-full mt-6">Submit</Button>
                </CardContent>
            </Card>
        </div>
    );
}
