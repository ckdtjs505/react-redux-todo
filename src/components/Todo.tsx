import { actionCreator } from "../store";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";

type TodoProps = {
  key : number;
  text :string;
  id : number;
}

const Todo = ({ text, id } : TodoProps) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(actionCreator.actionDelete(id));
  };
  return (
    <li>
      <Link to={`/${id}`}> {text}</Link>
      <button onClick={onClick}>삭제</button>
    </li>
  );
};

export default Todo;
