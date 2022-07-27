import {  RouteComponentProps } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

interface MatchParams {
  id: string;
}

// 아래 링크 참고 하기
// https://velog.io/@mandariin/Typescript%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-Route-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 
const Detail = ({match : {params : {id}}} : RouteComponentProps<MatchParams>) => {
  const list = useAppSelector( (state) => state.find(ele => ele.id === parseInt(id)))

  return (
    <>
      <h1>{list?.text}</h1>
      <h5>create at : {list?.id}</h5>
    </>
  );
};


export default Detail;
