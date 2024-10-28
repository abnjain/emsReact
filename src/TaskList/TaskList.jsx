import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    
    <div id="tasklist" className="flex items-center justify-start overflow-x-auto gap-5 flex-nowrap h-[55%] w-full py-5 mt-[-530px]">
        {/* <AcceptTask /> */}        
        {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} task={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} task={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={index} task={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={index} task={elem} />;
        }
        return null; // Add a fallback return to handle cases not matching any condition
      })}
    </div>
  )
}

export default TaskList