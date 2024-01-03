import "./App.css";
import MockNavBar from "./Components/MockNavBar";
import { Box } from "@mui/material";
import { ToDoList } from "./Components/ToDoList";

function App() {
  return (
    <Box>
      <MockNavBar></MockNavBar>
      <h1>To-Do List</h1>
      <div className="card">
        <ToDoList></ToDoList>
      </div>
    </Box>
  );
}

export default App;
