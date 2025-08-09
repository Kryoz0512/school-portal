
import Dashboardpage from './components/dashboard/admin/Dashboardpage'
import ManageEnrollment from './components/dashboard/admin/ManageEnrollment'
import ManageSchedule from './components/dashboard/admin/ManageSchedule'
import ManageSections from './components/dashboard/admin/ManageSections'
import ManageStudents from './components/dashboard/admin/ManageStudents'
import ManageTeachers from './components/dashboard/admin/ManageTeachers'
import LoginPage from './components/login/LoginPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        {/* Admin */}
        <Route path='/dashboard' element={<Dashboardpage />}>
          <Route path='enrollment' element={<ManageEnrollment />} />
          <Route path='students' element={<ManageStudents />} />
          <Route path='teachers' element={<ManageTeachers />} />
          <Route path='sections' element={<ManageSections />} />
          <Route path='schedule' element={<ManageSchedule />} />
        </Route>
      </Routes>
    </>
  )
}
