import React from 'react'
import Dashboard from '../components/Dashboard'
import { Route,Routes } from 'react-router-dom'
const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default DashboardRouter
