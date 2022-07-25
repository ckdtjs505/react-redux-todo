import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreator } from "../store";

// Home 을 home으로 쓰니까 Hook이 에러나오네?
const Home = ({ toDolist, addList }) => {
  const [list, setList] = useState("");
  const onChange = e => {
    const value = e.currentTarget.value;
    setList(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addList(list);
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

function mapStateToProps(state) {
  return { toDolist: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addList: text => dispatch(actionCreator.actionAdd(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
