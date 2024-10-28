import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{task.category}</h3>
                <h4 className="text-sm">{task.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
            <p className="text-sm mt-2">{task.description}</p>
            <div className="mt-4">
                <button className="w-full bg-red-600 py-1 px-2 rounded">Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask