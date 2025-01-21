import React from 'react'
import TodoList from './TodoList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div >
    <div className="flex flex-col justify-center items-center mt-48">
    Welcome
    <Link to="/TodoList">
   
    <button className="bg-purple-200 rounded-lg mt-10 px-4 py-2 hover:bg-pink-100">
      ToDo Page
    </button>
  </Link>
  <Routes>
    <Route path="/TodoList" element={<TodoList/>}>

    </Route>
  </Routes>
  </div>
  </div>
  </>
  )
}

export default Home
