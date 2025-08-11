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

export default function AdminLoginCard() {
 const navigate = useNavigate();
 const { setUser, setRole } = useUser();

 const gotoAdminDashboard = () => {
  setUser("Czianel Santos");
  setRole("admin");
  return navigate("/admin_dashboard/enrollment");
 };

 return (
  <Card>
   <CardHeader>
    <CardTitle>Admins</CardTitle>
    <CardDescription>Login as Admin</CardDescription>
   </CardHeader>
   <CardContent className="grid gap-6">
    <div className="grid gap-3">
     <Label htmlFor="admin_username">Username</Label>
     <Input id="admin_username" placeholder="ex. John Doe" type="text" />
    </div>
    <div className="grid gap-3">
     <Label htmlFor="admin_password">Password</Label>
     <Input id="admin_password" placeholder="Password" type="password" />
    </div>
   </CardContent>
   <CardFooter>
    <Button onClick={gotoAdminDashboard}>Login</Button>
   </CardFooter>
  </Card>
 );
}
