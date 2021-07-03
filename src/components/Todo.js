const Todo = ({ text }) => {
  return (
    <li>
      {text}
      <button>삭제</button>
    </li>
  );
};

export default Todo;
