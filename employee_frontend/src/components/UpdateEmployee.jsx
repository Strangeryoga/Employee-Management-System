import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {

    const nav=useNavigate();

    const {id}=useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const updateEmployee=(e) =>{
        e.preventDefault();
        console.log(employee);
       EmployeeService.updateEmployee(employee, id)
       .then((rsp)=>{
        nav("/employeeList");
       })
       .catch((err) =>{
        console.log(err);
       });
    };

    const handleChange =(e) =>{
        const value =e.target.value;
        setEmployee({...employee, [e.target.name]:value});
    };

    useEffect(() => {
      const fetch=async()=>{
        try{
            const rsp=await EmployeeService.getEmployeeById(id);
            setEmployee(rsp.data);
        }catch(error){
            console.log(error);
        }
      };
    fetch();
      
      
    }, []);

    const clear =(e) =>{
        e.preventDefault();
        nav("/employeeList");
    };
    

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8 '>
            <div className='font-thin text-2xl tracking-wider text-black dark:text-white' >
                <h1>Update Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 dark:bg-black
    dark:text-white'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal dark:text-gray-100'>
                    First Name</label>
                <input 
                type="text"
                name='firstName'
                value={employee.firstName}  
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2 bg-white text-black dark:text-black' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal dark:text-gray-100'>
                    Last Name</label>
                <input 
                type="text"
                name='lastName'
                value={employee.lastName} 
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2 bg-white text-black dark:text-black' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal dark:text-white'>
                    Email</label>
                <input 
                type="email"
                name='emailId'
                value={employee.emailId} 
                onChange={(e)=> handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2 bg-white text-black dark:text-black' />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button
                onClick={updateEmployee} 
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                    Update</button>
                <button 
                onClick={clear}
                className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                    Cancel</button>
            </div>
        </div>
      
    </div>
  )
}

export default UpdateEmployee
