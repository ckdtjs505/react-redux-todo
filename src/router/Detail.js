import { connect } from "react-redux";

const Detail = ({ list }) => {
  console.log(list);
  return (
    <>
      <h1>{list?.text}</h1>
      <h5>create at : {list?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { list: state.find(ele => ele.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
