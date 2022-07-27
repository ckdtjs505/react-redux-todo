import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "../../components/Todo";
import { actionCreator } from "../../store";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Button, Header, Input, InputForm } from "./Home.style";

const Home = () => {
  const toDolist = useAppSelector((state) => state)
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
