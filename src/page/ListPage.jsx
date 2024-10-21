import Footer from "../components/Footer"
import ListTable from "../components/ListTable"
import Navbar from "../components/Navbar"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ListPage = ({setRoute, tasks, editTask}) => {
    const [priorityFilter, setPriorityFiler] = useState("all")

    // eslint-disable-next-line react/prop-types
    const filteredTasks = tasks.filter(task => 
        priorityFilter === "all" || task.priority.toLowerCase() === priorityFilter
    );

    const groupedTasks = filteredTasks.reduce((acc, task) => {
        const priority = task.priority;
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(task);
        return acc;
    }, {});
    
    const groupedTasksArray = Object.entries(groupedTasks);

  return (
    <>
        <Navbar setRoute={setRoute} />
        <div className="p-3 flex">
            <input type="text" className="border border-gray-400 p-2 w-52 rounded-lg" placeholder="Search" />
            <div>
                <label className="ms-4">Priority:</label>
                <select className="border border-gray-300 p-2 rounded-lg ms-2" onChange={(e) => setPriorityFiler(e.target.value)}>
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Mid</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
        <div className="grid md:grid-flow-col md:grid-rows-1 grid-rows-3 md:py-0 p-2 flex justify-center items-center md:gap-10 gap-15 md:h-[81vh] h-[100vh]">
            {groupedTasksArray.map(([priority, tasks], index) => (<ListTable key={index} priority={priority} tasks={tasks} editTask={editTask}/>))}
        </div>
        <Footer />
    </>
  )
}

export default ListPage