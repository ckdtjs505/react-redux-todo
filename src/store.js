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

const reducer = (store, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...store];
    case DELETE:
      return store.filter(todo => todo.id !== action.id);
    default:
      return store;
  }
};

// 주의! : localstorage reduxState에 data 가 없는 경우 null로 선언되어 배열로 변경
const localData = JSON.parse(localStorage.getItem("reduxState")) || [];

const store = createStore(reducer, localData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const actionCreator = {
  actionAdd,
  actionDelete
};

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
