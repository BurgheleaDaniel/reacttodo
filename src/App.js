import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container-fluid">
      <h1>To Do - React with Context & Hooks</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
