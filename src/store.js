import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

const dispatchAdd = text => {
  return {
    text: text
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

const store = createStore();

export default store;
