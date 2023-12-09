import Mode from './components/Mode'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='w-screen h-screen bg-white dark:bg-black
    dark:text-white'>
        <Navbar/>
        <Mode/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout
