import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
const AddPage = ({ setRoute, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");
  const [deadline, setDeadline] = useState("");

  const handleAddTask = () => {
    if (!title) {
      alert("Please fill out all required fields.");
      return;
    }

    if(deadline && new Date(deadline) < new Date()) {
      alert("Deadline harus lebih besar dari hari ini");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      priority: priority.charAt(0).toUpperCase() + priority.slice(1),
      deadline: deadline ? deadline : "",
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("high");
    setDeadline("");
  };

  return (
    <>
      <Navbar setRoute={setRoute} />
      <div className="flex flex-col md:px-[20rem] px-2 w-full gap-4 py-12">
        <p className="text-xl font-bold">Add To Do</p>

        <label>Title</label>
        <input
          type="text"
          className="border border-gray-400 p-2 rounded-lg"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg h-[20rem]"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Priority</label>
        <select
          className="border border-gray-300 p-2 rounded-lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Deadline</label>
        <input
          type="datetime-local"
          className="border border-gray-400 p-2 rounded-lg"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button
          className="bg-blue-400 text-white p-2 w-16 rounded-xl"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AddPage;
