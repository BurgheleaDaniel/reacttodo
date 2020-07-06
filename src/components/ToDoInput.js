import React, { useState, useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";
import actionTypes from "../reducers/actionTypes";

const ToDoInput = () => {
  const [toDo, setToDo] = useState("");
  const { dispatch } = useContext(ToDoContext);

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.ADD_TODO, title: toDo });
    setToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="toDo"
        value={toDo}
        onChange={handleChange}
        required
      />

      <input type="submit" value="Add" />
    </form>
  );
};

export default ToDoInput;
