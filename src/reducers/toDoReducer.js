import actionTypes from "./actionTypes";
import uuid from "react-native-uuid";

export const toDoReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...prevState,
        todoList: [
          ...prevState.todoList,
          { id: uuid.v4(), title: action.title },
        ],
      };

    case actionTypes.REMOVE_TODO:
      return {
        ...prevState,
        todoList: prevState.todoList.filter((toDo) => toDo.id !== action.id),
      };

    case actionTypes.TOGGLE_TODO:
      return {
        ...prevState,
        todoList: prevState.todoList.map((prevToDo) => {
          var toDo = {
            ...prevToDo,
            completed:
              prevToDo.id === action.id
                ? !prevToDo.completed
                : prevToDo.completed,
          };
          return toDo;
        }),
      };

    case actionTypes.RESET_TODO:
      return {};

    case actionTypes.INITIAL_FETCH:
      return { status: action.data.status, todoList: action.data.todoList };

    default:
      return prevState;
  }
};
