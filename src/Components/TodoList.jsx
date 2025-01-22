// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";


// function TodoList() {
//     const [todos, setTodos] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [editValue, setEditValue] = useState("");
  
//     // Fetch hardcoded tasks from JSONPlaceholder
//     useEffect(() => {
//       async function fetchTasks() {
//         try {
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos?_limit=10"
//           );
//           const data = await response.json();
//           const initialTodos = data.map((task) => task.title); // Extract only titles
//           setTodos(initialTodos);
//         } catch (error) {
//           toast.error("Failed to load tasks.");
//         }
//       }
//       fetchTasks();
//     }, []);
  

//     function handleChange(event) {
//       setInputValue(event.target.value);
//     }
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       if (inputValue.trim() !== "") {
//         setTodos([...todos, inputValue]);
//         setInputValue("");
//         toast.success("Task added successfully!", { autoClose: 1000 });
//       } else {
//         toast.error("Please enter a task.", { autoClose: 1000 });
//       }
//     }
  
//     function handleDelete(index) {
//       const newTodos = [...todos];
//       newTodos.splice(index, 1);
//       setTodos(newTodos);
//       toast.info("Task deleted.", { autoClose: 1000 });
//     }
  
//     const handleEditClick = (index) => {
//       setEditingIndex(index);
//       setEditValue(todos[index]);
//     };
  
//     const handleEditChange = (event) => {
//       setEditValue(event.target.value);
//     };
  
//     const handleEditSave = (index) => {
//       const updatedTodos = [...todos];
//       if (editValue == "") {
//         toast.error("Task is empty", { autoClose: 1000 });
//       } else {
//         updatedTodos[index] = editValue;
//         setTodos(updatedTodos);
//         toast.success("Task updated successfully!", { autoClose: 1000 });
//         setEditingIndex(null);
//         setEditValue("");
//       }
//     };
  
//     return (
//       <>
//         <div className="flex justify-center items-center mt-48">
//           <div className="w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mt-10 p-6 rounded-lg shadow-xl bg-purple-100 bg-opacity-25 mt-">
//             <h1 className="font-sans text-xl mb-4 ">Todo List</h1>
//             <form onSubmit={handleSubmit} className="flex items-center mb-4">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleChange}
//                 className="w-full sm:w-72 h-10 rounded-lg border border-gray-300 p-2 text-gray-700 focus:ring"
//                 placeholder="Add a new task"
//               />
//               <button
//                 type="submit"
//                 className={`w-10 h-10 ml-2 flex items-center justify-center border border-gray-300 rounded-lg transition-all duration-300 ${
//                   inputValue.trim()
//                     ? "bg-white hover:bg-violet-100"
//                     : "bg-purple-100 cursor-not-allowed"
//                 }`}
//               >
//                 <i className="fa-solid fa-plus"></i>
//               </button>
//             </form>
//             <hr className="border-purple-300 mb-4" />
//             <div className="overflow-y-auto max-h-96 space-y-3 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-100">
//               <ul className="space-y-3 mr-4 ">
//                 {todos.map((todo, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center justify-between bg-purple-100 p-3 rounded-lg shadow-sm"
//                   >
//                     {editingIndex === index ? (
//                       <div className="flex items-center space-x-3">
//                         <input
//                           type="text"
//                           value={editValue}
//                           onChange={handleEditChange}
//                           className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-purple-300"
//                         />
//                         <button
//                           onClick={() => handleEditSave(index)}
//                           className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
//                         >
//                           Save
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-between w-full">
//                         <span className="text-gray-700">{todo}</span>
//                         <div className="flex items-center space-x-2">
//                           <i
//                             className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700"
//                             onClick={() => handleEditClick(index)}
//                           ></i>
//                           <button
//                             onClick={() => handleDelete(index)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <i className="fa-solid fa-trash"></i>
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
  
//         <ToastContainer
//           position="bottom-center"
//           hideProgressBar={false}
//           newestOnTop={false}
//         />
//       </>
//     );
//   }
  
//   export default TodoList;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editValue, setEditValue] = useState("");

//   useEffect(() => {
//     async function fetchTasks() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos?_limit=10"
//         );
//         const data = await response.json();
//         setTodos(data);
//       } catch (error) {
//         toast.error("Failed to load tasks.");
//       }
//     }
//     fetchTasks();
//   }, []);

//   function handleChange(event) {
//     setInputValue(event.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (inputValue.trim() !== "") {
//       setTodos([...todos, { title: inputValue }]);
//       setInputValue("");
//       toast.success("Task added successfully!", { autoClose: 1000 });
//     } else {
//       toast.error("Please enter a task.", { autoClose: 1000 });
//     }
//   }

//   function handleDelete(index) {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     toast.info("Task deleted.", { autoClose: 1000 });
//   }

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditValue(todos[index]?.title || "");
//   };

//   const handleEditChange = (event) => {
//     setEditValue(event.target.value);
//   };

//   const handleEditSave = (index) => {
//     const updatedTodos = [...todos];
//     if (editValue === "") {
//       toast.error("Task is empty", { autoClose: 1000 });
//     } else {
//       updatedTodos[index].title = editValue;
//       setTodos(updatedTodos);
//       toast.success("Task updated successfully!", { autoClose: 1000 });
//       setEditingIndex(null);
//       setEditValue("");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center mt-48">
//         <div className="w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mt-10 p-6 rounded-lg shadow-xl bg-purple-100 bg-opacity-25">
//           <h1 className="font-sans text-xl mb-4">Todo List</h1>
//           <form onSubmit={handleSubmit} className="flex items-center mb-4">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleChange}
//               className="w-full sm:w-72 h-10 rounded-lg border border-gray-300 p-2 text-gray-700 focus:ring"
//               placeholder="Add a new task"
//             />
//             <button
//               type="submit"
//               className={`w-10 h-10 ml-2 flex items-center justify-center border border-gray-300 rounded-lg transition-all duration-300 ${
//                 inputValue.trim()
//                   ? "bg-white hover:bg-violet-100"
//                   : "bg-purple-100 cursor-not-allowed"
//               }`}
//             >
//               <i className="fa-solid fa-plus"></i>
//             </button>
//           </form>
//           <hr className="border-purple-300 mb-4" />
//           <div className="overflow-y-auto max-h-96 space-y-3 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-gray-100">
//             <ul className="space-y-3 mr-4">
//               {todos.map((todo, index) => (
//                 <li
//                   key={todo.id || index}
//                   className="flex items-center justify-between bg-purple-100 p-3 rounded-lg shadow-sm"
//                 >
//                   {editingIndex === index ? (
//                     <div className="flex items-center space-x-3">
//                       <input
//                         type="text"
//                         value={editValue}
//                         onChange={handleEditChange}
//                         className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-purple-300"
//                       />
//                       <button
//                         onClick={() => handleEditSave(index)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-between w-full">
//                       <Link
//                         to={`/tasks/${todo.id}`}
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {todo.title}
//                       </Link>
//                       <div className="flex items-center space-x-2">
//                         <i
//                           className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700"
//                           onClick={() => handleEditClick(index)}
//                         ></i>
//                         <button
//                           onClick={() => handleDelete(index)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <i className="fa-solid fa-trash"></i>
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <ToastContainer
//         position="bottom-center"
//         hideProgressBar={false}
//         newestOnTop={false}
//       />
//     </>
//   );
// }

// export default TodoList;


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { fetchTodos, addTodo, deleteTodo, editTodo } from '../Components/todoSlice';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  // const error = useSelector((state) => state.todos.error);
  const [inputValue, setInputValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === 'failed') {
      toast.error('Failed to load tasks.');
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
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
      toast.success('Task added successfully!', { autoClose: 1000 });
    } else {
      toast.error('Please enter a task.', { autoClose: 1000 });
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
    toast.info('Task deleted.', { autoClose: 1000 });
  };

  const handleEditSave = (index) => {
    if (editValue.trim() === '') {
      toast.error('Task is empty', { autoClose: 1000 });
    } else {
      dispatch(editTodo({ index, title: editValue }));
      toast.success('Task updated successfully!', { autoClose: 1000 });
      setEditingIndex(null);
      setEditValue('');
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
                inputValue.trim() ? 'bg-white hover:bg-violet-100' : 'bg-gray-200 cursor-not-allowed'
              }`}
            >
              <i className="fas fa-plus"></i>
            </button>
          </form>
          <div className="max-h-96 overflow-y-auto">
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className="flex items-center mb-2">
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleEditChange}
                        className="w-full sm:w-72 h-10 rounded-lg border border-gray-300 p-2 text-gray-700 focus:ring"
                      />
                      <button
                        onClick={() => handleEditSave(index)}
                        className="ml-2 bg-green-500 text-white p-2 rounded-lg"
                      >
                        <i className="fas fa-save"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className="flex-1 cursor-pointer bg-purple-100 rounded-lg h-7"
                        onClick={() => handleTaskClick(todo.id)}
                      >
                        {todo.title}
                      </span>
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditValue(todo.title);
                        }}
                        className="ml-2 bg-blue-500 text-white h-8 w-8 rounded-lg "
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="ml-2 mr-2 bg-red-500 text-white h-8 w-8 rounded-lg"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer
         position="bottom-center"
         hideProgressBar={false}
         newestOnTop={false}
       />
    </>
  );
};

export default TodoList;