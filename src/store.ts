import { CaseReducer, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = { text: string; id: number; }[];

// 주의! : localstorage reduxState에 data 가 없는 경우 null로 선언되어 배열로 변경
const localData : State = JSON.parse(localStorage.getItem("reduxState") || '[]');

const initialState : State  = localData;
const add: CaseReducer<State, PayloadAction<string>> = (state, action) => [{ text: action.payload, id: Date.now() }, ...state];
const remove: CaseReducer<State, PayloadAction<string>> = (state,action) => state.filter(todo => todo.id !== parseInt(action.payload))

const listSlice = createSlice({
  name : 'list',
  initialState,
  reducers: {
    add,
    remove 
  }
})

export const actionCreator = {
  actionAdd : listSlice.actions.add,
  actionDelete : listSlice.actions.remove
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
