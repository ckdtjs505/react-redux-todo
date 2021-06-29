import { useState } from "react";

// Home 을 home으로 쓰니까 Hook이 에러나오네?
const Home = () => {
  const [list, setList] = useState("");
  const onChange = e => {
    const value = e.currentTarget.value;
    setList(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setList("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="값을 입력하시오" value={list} onChange={onChange}></input>
        <button> 등록 </button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
