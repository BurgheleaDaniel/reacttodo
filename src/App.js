import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { ToDoProvider, toDos } from "./TodoContext";

function App() {
  return (
    <div className="container-fluid">
      <h1>To Do - React with Context & Hooks</h1>

      <ToDoProvider value={toDos}>
        <ToDoInput />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
