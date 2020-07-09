import React, { useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";
import actionTypes from "../reducers/actionTypes";

const ToDoList = () => {
  const { data, dispatch } = useContext(ToDoContext);

  const removeToDo = (id) => {
    dispatch({ type: actionTypes.REMOVE_TODO, id });
  };

  const toggleToDo = (id) => {
    dispatch({ type: actionTypes.TOGGLE_TODO, id });
  };

  return (
    <>
      {data.status === 0 && <span className="loading">Loading...</span>}
      <ul className="toDoList">
        {data.todoList.map((toDo) => {
          return (
            <div key={toDo.id} className="inlineList">
              <input
                type="checkbox"
                checked={toDo.completed ? "checked" : ""}
                onChange={() => toggleToDo(toDo.id)}
              />
              <li className={toDo.completed ? "done" : "todo"}>{toDo.title}</li>
              <button onClick={() => removeToDo(toDo.id)}>X</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
