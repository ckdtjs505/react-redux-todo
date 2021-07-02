import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

export const actionAdd = text => {
  return {
    type: ADD,
    text
  };
};

export const actionDelete = id => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (store = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date().now() }, ...store];
    case DELETE:
      return store.filter(todo => todo.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(reducer);

export default store;
