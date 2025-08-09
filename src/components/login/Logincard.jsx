import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentLoginCard from "./students/StudentLoginCard";
import TeacherLoginCard from "./teachers/TeacherLoginCard";
import AdminLoginCard from "./admin/AdminLoginCard";

export function Logincard() {
 return (
  <div className="flex flex-col gap-6">
   <Tabs defaultValue="students">
    <TabsList>
     <TabsTrigger value="students">Students</TabsTrigger>
     <TabsTrigger value="teachers">Teachers</TabsTrigger>
     <TabsTrigger value="admins">Admins</TabsTrigger>
    </TabsList>
    <TabsContent value="students">
     <StudentLoginCard />
    </TabsContent>
    <TabsContent value="teachers">
     <TeacherLoginCard />
    </TabsContent>
    <TabsContent value="admins">
     <AdminLoginCard />
    </TabsContent>
   </Tabs>
  </div>
 );
}
