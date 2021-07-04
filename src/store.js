import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

const actionAdd = text => {
  return {
    type: ADD,
    text
  };
};

const actionDelete = id => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (store = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...store];
    case DELETE:
      return store.filter(todo => todo.id !== action.id);
    default:
      return store;
  }
};

const localData = JSON.parse(localStorage.getItem("reduxState"));

const store = createStore(reducer, localData);

export const actionCreator = {
  actionAdd,
  actionDelete
};

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
