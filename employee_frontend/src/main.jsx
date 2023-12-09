import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import EmployeeList from './components/EmployeeList.jsx'
import AddEmployee from './components/AddEmployee.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import UpdateEmployee from './components/UpdateEmployee'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<EmployeeList/>}/>
    <Route path="/" element={<EmployeeList/>}/> */}
     <Route path="employeeList" element={<EmployeeList/>}/> */
     <Route path="addEmployee" element={<AddEmployee/>}/>
     <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
);
