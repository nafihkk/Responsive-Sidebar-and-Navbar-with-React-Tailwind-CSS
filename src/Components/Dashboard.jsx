
import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "": "ml-64"} w-full`}>
        <Navbar 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Dashboard
