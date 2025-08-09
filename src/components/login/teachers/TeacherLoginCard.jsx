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

export default function TeacherLoginCard() {
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
    <Button>Login</Button>
   </CardFooter>
  </Card>
 );
}
