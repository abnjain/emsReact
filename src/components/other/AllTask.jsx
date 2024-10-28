import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
        
  return (
    <div id="employeesList" className="bg-[#1C1C1C] rounded h-60 p-5 mt-5 overflow-auto">
        <div className=" mt-2 py-2 px-4 flex justify-between rounded">
            <h2 className="w-1/5 text-center">Employee Name</h2>
            <h3 className="w-1/5 text-center">New Task</h3>
            <h5 className="w-1/5 text-center">Active Task</h5>
            <h5 className="w-1/5 text-center">Completed</h5>
            <h5 className="w-1/5 text-center">Failed</h5>
        </div>
        <div id="employeeTaskList" className="h-[80%] overflow-auto">
                {userData && userData.employees ? (
                    userData.employees.map((elem, index) => (
                        <div key={index} className="border-2 border-emerald-500 mt-2 py-2 px-4 flex justify-between rounded">
                            <h2 className="w-1/5 text-center ">{elem.firstName}</h2>
                            <h5 className="w-1/5 text-center text-blue-300">{elem.taskCounts.newtask}</h5>
                            <h5 className="w-1/5 text-center text-yellow-500">{elem.taskCounts.active}</h5>
                            <h5 className="w-1/5 text-center text-green-400">{elem.taskCounts.completed}</h5>
                            <h5 className="w-1/5 text-center text-red-500">{elem.taskCounts.failed}</h5>
                        </div>
                    ))
                ) : (
                    <p className="flex h-full justify-center items-center">Loading tasks...</p>
                )}
            </div>
        
    </div>
  )
}

export default AllTask