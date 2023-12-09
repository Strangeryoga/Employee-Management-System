import { useNavigate } from "react-router-dom"

function Navbar() {
  const nav=useNavigate();
    return (
      <div className='bg-gray-800'>
      <div className='h-16 px-8 flex items-center'>
        <p  onClick={()=> nav("/employeeList")} className='text-white font-bold hover:cursor-pointer'>Employee Management System</p>
      </div>
     </div>
    )
  }
  
  export default Navbar
  