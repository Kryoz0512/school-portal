import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

import AdminDashboardLayout from "./components/dashboard/admin/AdminDashboardLayout";
import ManageEnrollment from "./components/dashboard/admin/ManageEnrollment";
import ManageSchedule from "./components/dashboard/admin/ManageSchedule";
import ManageSections from "./components/dashboard/admin/ManageSections";
import ManageStudents from "./components/dashboard/admin/ManageStudents";
import ManageTeachers from "./components/dashboard/admin/ManageTeachers";
import AdminArchive from "./components/dashboard/admin/AdminArchive";

import StudentDashboardLayout from "./components/dashboard/students/StudentDashboardLayout";
import ManageClearance from "./components/dashboard/students/ManageClearance";
import ReportCard from "./components/dashboard/students/ReportCard";
import Subject from "./components/dashboard/students/Subject";
import Schedule from "./components/dashboard/students/Schedule";

import TeacherDashboardLayout from "./components/dashboard/teachers/TeacherDashboardLayout";
import TeacherManageStudents from "./components/dashboard/teachers/ManageStudents";
import TeacherSchedule from "./components/dashboard/teachers/Schedule";



export default function App() {
 return (
  <>
   <Routes>
    <Route path="/login" element={<LoginPage />} />

    {/* Admin */}
    <Route path="/admin_dashboard" element={<AdminDashboardLayout />}>
     <Route index path="enrollment" element={<ManageEnrollment />} />
     <Route path="students" element={<ManageStudents />} />
     <Route path="teachers" element={<ManageTeachers />} />
     <Route path="sections" element={<ManageSections />} />
     <Route path="schedule" element={<ManageSchedule />} />
     <Route path="archive" element={<AdminArchive />} />
    </Route>

    {/* Student */}
    <Route path="/student_dashboard" element={<StudentDashboardLayout />}>
     <Route index path="clearance" element={<ManageClearance />} />
     <Route path="report_card" element={<ReportCard />} />
     <Route path="schedule" element={<Schedule />} />
     <Route path="subject" element={<Subject />} />
    </Route>

    {/* Teacher */}
    <Route path="/teacher_dashboard" element={<TeacherDashboardLayout />}>
     <Route index path="manage_students" element={<TeacherManageStudents />} />
     <Route path="schedule" element={<TeacherSchedule />} />
    </Route>

   </Routes>
  </>
 );
}
