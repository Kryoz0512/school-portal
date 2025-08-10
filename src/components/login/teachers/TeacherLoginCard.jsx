import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/User";

export default function TeacherLoginCard() {
    const navigate = useNavigate()
    const { setUser, setRole } = useUser()

    const gotoTeacherDashboard = () => {
        setUser("Tata Lino")
        setRole("teacher")
        return navigate("/teacher_dashboard/manage_students")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Teachers</CardTitle>
                <CardDescription>Login as Teacher</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="teacher_username">Username</Label>
                    <Input id="teacher_username" placeholder="ex. John Doe" type="text" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="teacher_password">Password</Label>
                    <Input id="teacher_password" placeholder="Password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={gotoTeacherDashboard}>Login</Button>
            </CardFooter>
        </Card>
    );
}
