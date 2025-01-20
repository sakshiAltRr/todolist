

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";

function App(){
  return(
  <Router>
< div>
      <nav className="ml-2 space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/TodoList" className="hover:text-blue-600">Todos</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/TodoList" element={<TodoList/>}/>
        </Routes>
      </div>
</div>
  </Router>
  );
}

export default App;
