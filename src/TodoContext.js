import React from "react";

export const toDos = [
  {
    id: 1,
    title: "Return library books",
    done: false,
  },
  {
    id: 2,
    title: "Pickup parcel from Post Office",
    done: false,
  },
  {
    id: 3,
    title: "Prepare for final exams",
    done: false,
  },
];

const ToDoContext = React.createContext();

export const ToDoProvider = ToDoContext.Provider;

export default ToDoContext;
