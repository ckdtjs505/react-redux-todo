import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { actionCreator, RootState } from "../store";

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

const Home = () => {
  const toDolist = useSelector((state : RootState) => state)
  const dispatch = useDispatch();

  const [list, setList] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setList(value);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch( actionCreator.actionAdd(list))
    setList("");
  };
  return (
    <>
      <Header>To Do List</Header>
      <InputForm onSubmit={onSubmit}>
        <Input placeholder="값을 입력하시오" value={list} onChange={onChange}></Input>
        <Button> 등록 </Button>
      </InputForm>
      <ul>
        {toDolist && toDolist.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
