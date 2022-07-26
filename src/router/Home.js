import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { actionCreator } from "../store";

const Home = ({ addList }) => {
  const toDolist = useSelector(state => state)
  const dispatch = useDispatch();

  const [list, setList] = useState("");
  const onChange = e => {
    const value = e.currentTarget.value;
    setList(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch( actionCreator.actionAdd(list))
    setList("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="값을 입력하시오" value={list} onChange={onChange}></input>
        <button> 등록 </button>
      </form>
      <ul>
        {toDolist && toDolist.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
