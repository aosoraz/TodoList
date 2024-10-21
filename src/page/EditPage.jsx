/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const EditPage = ({ task, setRoute, updateTask }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "high");
  const [deadline, setDeadline] = useState(task?.deadline || "");
  const [modalStatus, setModalStatus] = useState(false); // Controls modal visibility

  const modalHandler = (status) => {
    setModalStatus(status); // Toggles modal
  }

  const editSubmitHandler = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      priority,
      deadline,
    };
    console.log("Updated Task:", updatedTask);
    updateTask(updatedTask);
    setRoute("home");
  };

  return (
    <>
      <Navbar setRoute={setRoute}/>
      <div className="px-10 py-5 flex flex-col">
        <div className="text-3xl font-bold mb-2">Detail To Do</div>
        <label>Title</label>
        <input
          type="text"
          className="border border-gray-400 p-2 rounded-lg w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg h-[20rem] w-full mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Priority</label>
        <select
          className="border border-gray-300 p-2 rounded-lg mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label>Deadline</label>
        <input
          type="datetime-local"
          className="border border-gray-400 p-2 rounded-lg mb-2"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <div className="flex flex-row mt-2">
          <div className="flex-1">
            <button
              className="bg-blue-400 text-white p-2 w-16 rounded-xl"
              onClick={() => setRoute("home")}
            >
              Back
            </button>
            <button
              className="bg-green-400 text-white p-2 w-16 rounded-xl ms-2"
              onClick={() => modalHandler(true)} // Opens the confirmation modal
            >
              Edit
            </button>
          </div>
          <button className="bg-yellow-400 text-black p-2 w-16 rounded-xl" onClick={() => modalHandler(true)}>
            Done
          </button>
        </div>
      </div>

      {/* Modal for confirmation */}
      {modalStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Edit</h2>
            <p>Are you sure you want to edit this task?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => modalHandler(false)} // Close the modal
              >
                Cancel
              </button>
              <button
                className="bg-green-400 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  editSubmitHandler();
                  modalHandler(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default EditPage;
