import React, { useEffect, useContext } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { ToDoContext } from "./contexts/TodoContext";
import ToDoCounter from "./components/ToDoCounter";
import ResetState from "./components/ResetState";
import Axios from "axios";
import { config } from "./config";
import actionTypes from "./reducers/actionTypes";

function App() {
  const { data, dispatch } = useContext(ToDoContext);

  const dataFetch = () => {
    Axios.get(config.API_URL)
      .then((response) => {
        dispatch({
          type: actionTypes.INITIAL_FETCH,
          data: { status: config.status.success, todoList: response.data },
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.DISPATCH_ERROR,
          data: { status: config.status.error },
        });
      });
  };

  useEffect(dataFetch, [data.fetchTodo]);

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
