import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (formData) => {
    const newTodo = { ...formData, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            description={todo.description}
            key={todo.id}
            id={todo.id}
            handleRemove={remove}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
