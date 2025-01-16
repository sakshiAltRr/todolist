import React from "react";
// import Registeration from './Registeration/Registeration';
// import Login from './Login/Login'
import {useState} from 'react'
import HardCodedTasks from "./Tasks/HardCodedTasks";
import "./App.css"
import "./index.css"

function App() {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')
 const [editingIndex,setEditingIndex]=useState(null);
 const[editValue,setEditValue]=useState("");


  function handleChange(event){
    setInputValue(event.target.value)
  }

  function handleSubmit(e){
    e.preventDefault() 
    if(!inputValue==''){
    setTodos([...todos, inputValue])}
    setInputValue('')
   
  }

  function handleDelete(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditValue(todos[index]);
  };

  const handleEditChange=(event)=>{
    setEditValue(event.target.value);
  }


  const handleEditSave=(index)=>{
    const updatedTodos=[...todos];
    updatedTodos[index]=editValue;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditValue("");
  }




  return (
    <>

{/*     
<h3>Welcome To ToDo List App</h3>
    <Registeration/>
    <p>Already a Member?</p> */}


    <div >
      <div className="d1">
    <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} 
          style={{width:"300px" ,height:"28px",borderRadius:"10px",border:"1px solid lightgrey"}}
          
          />
          <button
            style={{ width: "30px", height: "30px", marginLeft: "4px" ,border:"1px solid lightgrey",borderRadius:"20%"}}
            type="submit"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <hr/>
          <br/>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => handleEditSave(index)} style={{marginLeft:"6px"}}>Save</button>
                </>
              ) : (
                <>
                  {todo}
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ marginLeft: "8px" }}
                    onClick={() => handleEditClick(index)}
                  ></i>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "8px"}}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </>
              )}
            </li>
          ))}
        
          <HardCodedTasks/>
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;