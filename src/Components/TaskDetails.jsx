import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskDetails();
  }, [id]);

  if (!task) return <div className="flex justify-center mt-52">Loading...</div>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-purple-100 rounded-lg shadow-md mt-52">
      <h2 className="text-2xl text-center mb-4">Task Details</h2>
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>User ID:</strong> {task.userId}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default TaskDetails;
