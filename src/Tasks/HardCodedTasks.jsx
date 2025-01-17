import React, { useState } from "react";

function HardCodedTasks() {
  const [tasks, setTasks] = useState([
    "To Learn Redux",
    "Send an Email to Manager",
    "Go to Gym",
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  // Handle task edit
  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedValue(tasks[index]);
  };

  const handleEditChange = (event) => {
    setEditedValue(event.target.value);
  };

  const handleEditSave = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedValue;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedValue("");
  };

  // Handle task delete
  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-purple-100 p-3 rounded-lg shadow-sm"
          >
            {editingIndex === index ? (
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={editedValue}
                  onChange={handleEditChange}
                  className="border border-gray-300 rounded-lg p-2 text-gray-700 w-full sm:w-72"
                />
                <button
                  onClick={() => handleEditSave(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-gray-700">{task}</span>
                <div className="flex items-center space-x-2">
                  <i
                    className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700"
                    onClick={() => handleEditClick(index)}
                  ></i>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HardCodedTasks;
