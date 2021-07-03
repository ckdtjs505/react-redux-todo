import { connect } from "react-redux";
import { actionCreator } from "../store";

const Todo = ({ text, id, deleteList }) => {
  const onClick = () => {
    deleteList(id);
  };
  return (
    <li>
      {text}
      <button onClick={onClick}>삭제</button>
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    deleteList: id => dispatch(actionCreator.actionDelete(id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);
