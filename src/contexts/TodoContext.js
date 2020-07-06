import React, { createContext, useReducer } from "react";
import { toDoReducer } from "../reducers/toDoReducer";
import { initialState } from "./initialState";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
  const [toDos, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ toDos, dispatch }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
