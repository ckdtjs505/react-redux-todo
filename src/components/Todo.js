import { useDispatch } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, id }) => {
  const dispatch = useDispatch();

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
