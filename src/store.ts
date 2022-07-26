import { configureStore, createSlice } from "@reduxjs/toolkit";

type State = { text: string, id: number }[]

// 주의! : localstorage reduxState에 data 가 없는 경우 null로 선언되어 배열로 변경
const localData: State = JSON.parse(localStorage.getItem("reduxState") || '[]');

const initialState = localData;

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


//redux store state 관련
//https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-usedispatch-hook
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
