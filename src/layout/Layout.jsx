import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='flex h-[100vh] bg-[#F8F8F8]'> 
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout