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

export default function StudentLoginCard() {
 return (
  <Card>
   <CardHeader>
    <CardTitle>Students</CardTitle>
    <CardDescription>Login as Student</CardDescription>
   </CardHeader>
   <CardContent className="grid gap-6">
    <div className="grid gap-3">
     <Label htmlFor="student_id_number">ID Number</Label>
     <Input id="student_id_number" placeholder="123-456-7890" type="number" />
    </div>
    <div className="grid gap-3">
     <Label htmlFor="student_password">Password</Label>
     <Input id="student_password" placeholder="Password" type="password" />
    </div>
   </CardContent>
   <CardFooter>
    <Button>Login</Button>
   </CardFooter>
  </Card>
 );
}
