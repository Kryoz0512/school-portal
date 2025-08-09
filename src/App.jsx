import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

import AdminDashboardLayout from "./components/dashboard/admin/AdminDashboardLayout";
import ManageEnrollment from "./components/dashboard/admin/ManageEnrollment";
import ManageSchedule from "./components/dashboard/admin/ManageSchedule";
import ManageSections from "./components/dashboard/admin/ManageSections";
import ManageStudents from "./components/dashboard/admin/ManageStudents";
import ManageTeachers from "./components/dashboard/admin/ManageTeachers";

import StudentDashboardLayout from "./components/dashboard/students/StudentDashboardLayout";
import ManageClearance from "./components/dashboard/students/ManageClearance";

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
    </Route>

    {/* Student */}
    <Route path="/student_dashboard" element={<StudentDashboardLayout />}>
     <Route index path="clearance" element={<ManageClearance />} />
    </Route>
   </Routes>
  </>
 );
}
