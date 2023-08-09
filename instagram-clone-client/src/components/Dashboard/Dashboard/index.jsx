import React from 'react'
import SideBar from '../sideBar'
import Home from '../Home'
const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <SideBar />
      <Home />
    </div>
  )
}

export default Dashboard