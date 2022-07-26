import { configureStore, createSlice } from "@reduxjs/toolkit";

// 주의! : localstorage reduxState에 data 가 없는 경우 null로 선언되어 배열로 변경
const localData = JSON.parse(localStorage.getItem("reduxState")) || [];

const initialState = { list: localData }

const listSlice = createSlice({
  name : 'list',
  initialState,
  reducers: {
    add : (state,action) => [{ text: action.payload, id: Date.now() }, ...state],
    delete : (state,action) => state.filter(todo => todo.id !== action.payload)
  }
})

export const actionCreator = {
  actionAdd : listSlice.actions.add,
  actionDelete : listSlice.actions.delete
};

const store = configureStore({
  reducer : listSlice.reducer,
  devTools: true,
  preloadedState : localData
})

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
