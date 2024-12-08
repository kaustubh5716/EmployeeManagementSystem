import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import Employee from './Component/Employee'
import Category from './Component/Category'
import Profile from './Component/Profile'
import AddCategory from './Component/AddCategory'
import AddEmployee from './Component/AddEmployee'
import EditEmployee from './Component/EditEmployee'
import Start from './Component/Start'
import EmployeeLogin from './Component/EmployeeLogin'
import EmployeeDetail from './Component/EmployeeDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path (/) to /start */}
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="/start" element={<Start />} />
        <Route path="/start/adminlogin" element={<Login />} />
        <Route path="/start/employee_login" element={<EmployeeLogin />} />
        <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/category" element={<Category />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/add_category" element={<AddCategory />} />
          <Route path="/dashboard/add_employee" element={<AddEmployee />} />
          <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
