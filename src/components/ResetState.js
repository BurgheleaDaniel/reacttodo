import React, { useContext } from "react";
import { ToDoContext } from "../contexts/TodoContext";
import actionTypes from "../reducers/actionTypes";

const ResetState = () => {
  const { dispatch } = useContext(ToDoContext);

  const resetState = () => {
    dispatch({ type: actionTypes.RESET_TODO });
  };

  return <button onClick={resetState}>Reset</button>;
};

export default ResetState;
