import styled from "styled-components";
import { useState } from "react";

const Header = styled.h1`
  background: gray;
  margin: 0;
`;

const InputForm = styled.form`
  display: flex;
  border: solid 1px black;
`;

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  width: 50px;
`;

const HomeTest = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setText(value);
  };

  const onClick = text => {
    setList(list.filter(ele => ele !== text));
  };

  return (
    <div>
      <Header>TO DO LIST</Header>
      <InputForm onSubmit={onSubmit}>
        <Input value={text} onChange={onChange} placeholder="해야할 일 입력" />
        <Button> 등록 </Button>
      </InputForm>
      <ul id="list">
        {list.map((ele, idx) => (
          <li key={idx}>
            {ele}
            <button onClick={() => onClick(ele)}> 삭제 </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTest;
