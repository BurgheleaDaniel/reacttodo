import React, { useEffect, useContext } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { ToDoContext } from "./contexts/TodoContext";
import ToDoCounter from "./components/ToDoCounter";
import ResetState from "./components/ResetState";
import axios from "axios";

import actionTypes from "./reducers/actionTypes";

function App() {
  const { dispatch } = useContext(ToDoContext);

  useEffect(() => {
    function initialDataFetch(todoList) {
      dispatch({
        type: actionTypes.INITIAL_FETCH,
        data: { status: 1, todoList },
      });
    }

    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      initialDataFetch(response.data);
    });
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <h1>To Do - React with Context & Hooks</h1>
      <ToDoCounter />
      <ToDoInput />
      <ToDoList />
      <ResetState />
    </div>
  );
}

export default App;
