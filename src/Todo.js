import React from "react";

const Todo = (props) => {
  const remove = () => {
    props.handleRemove(props.id);
  };

  return (
    <li>
      {props.description}
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Todo;
