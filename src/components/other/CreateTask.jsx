import React, {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);    

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false});

    const task = {taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false}

    if (userData && userData.employees) {
      const data = userData.employees.map((element) => {
        if (assignTo === element.firstName) {
          return {
            ...element,
            tasks: [...element.tasks, task],
            taskCounts: {
              ...element.taskCounts,
              newtask: element.taskCounts.newtask + 1,
            },
          };
        }
        return element;
      });
  
      // Update the state with the new data
      setUserData({ ...userData, employees: data });
    } else {
      console.log("No Data");
      
    }
    console.log(userData);
    

    // localStorage.setItem("employees", JSON.stringify(data));

    setAssignTo("");
      setCategory("");
      setTaskDate("");
      setTaskDescription("");
      setTaskTitle("");
  }
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
            <form onSubmit = {(e) => {
              submitHandler(e);
            }} action="" className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className="text-sm py-1 px-2 ww-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Design" />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className="text-sm py-1 px-2 ww-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" name="" />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
                <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className="text-sm py-1 px-2 ww-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="text-sm py-1 px-2 ww-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc..." />
                </div>
                </div>
                
                <div className="w-2/5 flex flex-col items-start">
                <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
                <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask