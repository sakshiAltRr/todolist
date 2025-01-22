// import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
// import "./index.css";
// import Home from "./Components/Home";
// import TodoList from "./Components/TodoList";
// import TaskDetails from "./Components/TaskDetails";
// function App() {
//   return (
//     <Router>
//       <nav className="ml-2 space-x-4">
//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>
//           <Link to="/TodoList" className="hover:text-blue-600">
//             Todos
//           </Link>
//           {/* <Link
//   to={`/TaskDetails/${index + 1}`} // Use the task's unique ID
//   className="text-gray-700 hover:text-blue-600"
// >
//   {todo}
// </Link> */}

//         </nav>
    
      
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/TodoList" element={<TodoList />} />
//             <Route path="/tasks/:id" element={<TaskDetails />} />
//           </Routes>
        
//     </Router>
   
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
// import "./index.css";
// import TodoList from "./Components/TodoList";
// import TaskDetails from "./Components/TaskDetails";
// import Home from "./Components/Home";


// function App() {
//   return (
//     <Router>
//       <nav className="ml-2 space-x-4">
//            <Link to="/" className="hover:text-blue-600">Home
//           </Link>
//           <Link to="/TodoList" className="hover:text-blue-600">
//             Todos
//           </Link>
        
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/TodoList" element={<TodoList />} />
//         <Route path="/tasks/:id" element={<TaskDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './index.css';
import TodoList from './Components/TodoList';
import TaskDetails from './Components/TaskDetails';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <nav className="ml-2 space-x-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/TodoList" className="hover:text-blue-600">
          Todos
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

