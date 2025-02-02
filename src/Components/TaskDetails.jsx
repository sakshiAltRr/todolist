import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskById } from "../Components/todoSlice";

function TaskDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.todos.task);
  const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    dispatch(fetchTaskById(id));
  }, [dispatch, id]);

  if (status === "loading")
    return <div className="flex justify-center mt-52">Loading...</div>;

  if (!task)
    return <div className="flex justify-center mt-52">Task not found</div>;

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
