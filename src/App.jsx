import { useState } from 'react'

import './App.css'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
      <div className='flex'>
       <Sidebar sidebarToggle={sidebarToggle} />
       <Dashboard 
       sidebarToggle={sidebarToggle}
       setSidebarToggle={setSidebarToggle}/>
      </div>
    )
}

export default App
