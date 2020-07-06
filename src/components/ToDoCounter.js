import React, { useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";

const ToDoCounter = () => {
  const { toDos } = useContext(ToDoContext);

  const doneCount = toDos.filter((toDo) => toDo.done === true).length;
  const todoCount = toDos.length - doneCount;

  return (
    <div className="statusCounter">
      <span>Done: {doneCount}</span>
      <span>ToDo: {todoCount}</span>
    </div>
  );
};

export default ToDoCounter;
