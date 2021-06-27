import React, { useState } from "react";

function home() {
  const [text, setText] = useState("");
  return (
    <>
      <h1>To Do</h1>
      <form>
        <input placeholder="값을 입력하시오"></input>
        <button> 등록 </button>
      </form>
      <ul></ul>
    </>
  );
}

export default home;
