import React, { useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";

const ToDoCounter = () => {
  const { data } = useContext(ToDoContext);

  const completedCount = data.todoList.filter((toDo) => toDo.completed === true)
    .length;
  const todoCount = data.todoList.length - completedCount;

  return (
    <div className="statusCounter">
      <span>Done: {completedCount}</span>
      <span>ToDo: {todoCount}</span>
    </div>
  );
};

export default ToDoCounter;
