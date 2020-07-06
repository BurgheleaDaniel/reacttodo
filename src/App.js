import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoContextProvider from "./contexts/TodoContext";
import ToDoCounter from "./components/ToDoCounter";
import ResetState from "./components/ResetState";

function App() {
  return (
    <div className="container-fluid">
      <h1>To Do - React with Context & Hooks</h1>

      <ToDoContextProvider>
        <ToDoCounter />
        <ToDoInput />
        <ToDoList />
        <ResetState />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
