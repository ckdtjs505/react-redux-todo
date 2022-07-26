import { useSelector } from "react-redux";

const Detail = ({match : {params : {id}}}) => {
  const list = useSelector( state => 
    state.find(ele => ele.id === parseInt(id))
  )

  return (
    <>
      <h1>{list?.text}</h1>
      <h5>create at : {list?.id}</h5>
    </>
  );
};


export default Detail;
