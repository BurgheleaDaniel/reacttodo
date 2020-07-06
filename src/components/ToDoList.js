import React, { useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";
import actionTypes from "../reducers/actionTypes";

const ToDoList = () => {
  const { toDos, dispatch } = useContext(ToDoContext);

  const removeToDo = (id) => {
    dispatch({ type: actionTypes.REMOVE_TODO, id });
  };

  const toggleToDo = (id) => {
    dispatch({ type: actionTypes.TOGGLE_TODO, id });
  };

  return (
    <ul className="toDoList">
      {toDos.map((toDo) => {
        return (
          <div key={toDo.id} className="inlineList">
            <input
              type="checkbox"
              checked={toDo.done ? "checked" : ""}
              onChange={() => toggleToDo(toDo.id)}
            />
            <li className={toDo.done ? "done" : "todo"}>{toDo.title}</li>
            <button onClick={() => removeToDo(toDo.id)}>X</button>
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoList;
