import React, { createContext, useReducer } from "react";
import { toDoReducer } from "../reducers/toDoReducer";

const initialState = {
  todoList: [],
  status: 0, // 0:loading, 1:success, 2:error
  fetchTodo: false,
};

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
  const [data, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ data, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
