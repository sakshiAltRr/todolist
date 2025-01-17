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
    <div >
      {tasks.map((task, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editedValue}
                onChange={handleEditChange}
              />
              <button onClick={() => handleEditSave(index)}>Save</button>
            </>
          ) : (
            <>
              {task}
              <i
                className="fa-solid fa-pen-to-square"
                style={{ marginLeft: "8px" }}
                onClick={() => handleEditClick(index)}
              ></i>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </>
          )}
        </li>
      ))}
    </div>
  );
}

export default HardCodedTasks;