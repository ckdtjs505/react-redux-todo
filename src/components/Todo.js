import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, deleteList, id }) => {
  const onClick = () => {
    deleteList();
  };
  return (
    <li>
      <Link to={`/${id}`}> {text}</Link>
      <button onClick={onClick}>삭제</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteList: () => dispatch(actionCreator.actionDelete(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);
