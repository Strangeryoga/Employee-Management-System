/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Employee=({employee, deleteEmployee}) => {
    const nav=useNavigate();
    const editEmployee=(e, id)=>{
        e.preventDefault();
        nav(`/editEmployee/${id}`);
    };


  return (
    <tr key={employee.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap dark:bg-black
    dark:text-white'>
      <div className='text-sm text-gray-500 dark:text-gray-300'>
        {employee.firstName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap dark:bg-black
    dark:text-white'>
      <div className='text-sm text-gray-500 dark:text-gray-300'>
        {employee.lastName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap dark:bg-black
    dark:text-white'>
      <div className='text-sm text-gray-500 dark:text-gray-300'>
       {employee.emailId} </div>
    </td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm dark:bg-black
    dark:text-white'>
      <a 
      onClick={(e, id)=> editEmployee(e, employee.id)}
       className='text-indigo-400 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
      <a 
       onClick={(e, id) => deleteEmployee(e, employee.id)}
       className='text-indigo-400 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
    </td>
  </tr>
  );
};

export default Employee
