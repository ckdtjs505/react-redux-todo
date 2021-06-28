import { useState } from "react";

// Home 을 home으로 쓰니까 Hook이 에러나오네?
const Home = () => {
  const [list, setList] = useState("");

  let text = "";
  const setText = value => {
    this.text = value;
  };
  const onChange = e => {
    const value = e.currentTarget.value;
    setText(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="값을 입력하시오" value={text} onChange={onChange}></input>
        <input placeholder="값을 입력하시오" value={text}></input>
        <button> 등록 </button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
