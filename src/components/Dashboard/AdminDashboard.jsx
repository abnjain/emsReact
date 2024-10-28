import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-20">
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask data={props} />
        <AllTask data={props} />
    </div>
  )
}

export default AdminDashboard