import React, { useContext } from "react";
import ToDoContext from "../TodoContext";

const ToDoList = () => {
  const toDos = useContext(ToDoContext);
  console.log(toDos);
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.title}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
