import actionTypes from "./actionTypes";
import uuid from "react-native-uuid";
import { initialState } from "../contexts/initialState";

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { id: uuid.v4(), title: action.title }];

    case actionTypes.REMOVE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);

    case actionTypes.TOGGLE_TODO:
      return state.map((toDo) => {
        var temp = Object.assign({}, toDo);
        if (temp.id === action.id) {
          temp.done = !temp.done;
        }
        return temp;
      });

    case actionTypes.RESET_TODO:
      return [...initialState];

    default:
      return state;
  }
};
