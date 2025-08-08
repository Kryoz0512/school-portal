import Dashboardpage from './components/dashboard/Dashboardpage'
import LoginPage from './components/login/LoginPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route index path='/dashboard' element={<Dashboardpage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}
