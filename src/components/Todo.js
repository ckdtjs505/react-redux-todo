import { connect } from "react-redux";
import { actionCreator } from "../store";

const Todo = ({ text, deleteList }) => {
  const onClick = () => {
    deleteList();
  };
  return (
    <li>
      {text}
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
