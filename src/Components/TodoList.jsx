import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
} from "../Components/todoSlice";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "failed") {
      toast.error("Failed to load tasks.");
    }
  }, [status]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
      toast.success("Task added successfully!", { autoClose: 1000 });
    } else {
      toast.error("Please enter a task.", { autoClose: 1000 });
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
    toast.info("Task deleted.", { autoClose: 1000 });
  };

  const handleEditSave = (e,index) => {
    if(e.type === "click" || e.key === "Enter"){
    if (editValue.trim() === "") {
      toast.error("Task is empty", { autoClose: 1000 });
    } else {
      dispatch(editTodo({ index, title: editValue }));
      toast.success("Task updated successfully!", { autoClose: 1000 });
      setEditingIndex(null);
      setEditValue("");
    }
  }
  };

  const handleTaskClick = (id) => {
    navigate(`/tasks/${id}`);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-48">
        <div className="w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mt-10 p-6 rounded-lg shadow-xl bg-purple-100 bg-opacity-25">
          <h1 className="font-sans text-xl mb-4">Todo List</h1>
          <form onSubmit={handleSubmit} className="flex items-center mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full sm:w-72 h-10 rounded-lg border border-gray-300 p-2 text-gray-700 focus:ring"
              placeholder="Add a new task"
            />
            <button
              type="submit"
              className={`w-10 h-10 ml-2 flex items-center justify-center border border-gray-300 rounded-lg transition-all duration-300 ${
                inputValue.trim()
                  ? "bg-white hover:bg-violet-100"
                  : "bg-gray-200 cursor-not-allowed"
              }`}
            >
              <i className="fas fa-plus"></i>
            </button>
          </form>

          <div className="overflow-y-auto max-h-96 space-y-3 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-100">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2 bg-white p-2 rounded-lg shadow-md mr-2"
                >
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleEditChange}
                        onKeyDown={(e) => handleEditSave(e, index)}
                        className="w-full sm:w-72 h-10 rounded-lg border border-gray-300 p-2 text-gray-700 focus:ring"
                      />
                      <button
                        onClick={(e) => handleEditSave(e,index)}
                        className="ml-2 bg-green-500 text-white  px-2 py-1 rounded-lg hover:bg-green-700"
                      >
                        <i className="fas fa-save"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className="flex-1 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap "
                        onClick={() => handleTaskClick(todo.id)}
                      >
                        {todo.title}
                      </span>
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditValue(todo.title);
                        }}
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-700"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                      >
                        <i className="fas fa-trash *:"></i>
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default TodoList;
