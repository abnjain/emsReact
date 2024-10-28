import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 h-screen">
        <div className="rounded-xl h-40 w-[45%] px-10 py-5 bg-red-400">
            <h2 className="text-3xl font-semibold">{data.taskCounts.newtask}</h2>
            <h3 className="text-3xl font-semibold">New Task</h3>
        </div>
        <div className="rounded-xl h-40 w-[45%] px-10 py-5 bg-blue-400">
            <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
            <h3 className="text-3xl font-semibold">Completed Task</h3>
        </div>
        <div className="rounded-xl h-40 w-[45%] px-10 py-5 bg-green-400">
            <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
            <h3 className="text-3xl font-semibold">Accepted Task</h3>
        </div>
        <div className="rounded-xl h-40 w-[45%] px-10 py-5 bg-yellow-400">
            <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
            <h3 className="text-3xl font-semibold">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber