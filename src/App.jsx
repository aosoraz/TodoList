import { useState } from "react"
import ListPage from "./page/listPage";
import AddPage from "./page/AddPage";
import EditPage from "./page/EditPage";

function App() {

  const[route, setRoute] = useState('home');

  const[tasks, setTasks] = useState([])

  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const editTask = (task) => {
    console.log(task)
    setSelectedTask(task); // Set the selected task for editing
    setRoute("edit");
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setRoute('home'); // Redirect back to the home page after updating
  }

  return (
    <>
      <div>
        {route === "home" && <ListPage setRoute={setRoute} tasks={tasks} editTask={editTask} />}
        {route === "add" && <AddPage setRoute={setRoute} addTask={addTask} />}
        {route === "edit" && <EditPage task={selectedTask} setRoute={setRoute} updateTask={updateTask}/>}
      </div>
    </>
  )
}

export default App
