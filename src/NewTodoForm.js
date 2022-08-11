import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { description: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(INITIAL_STATE);
    addTodo(formData);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">What do you need to do? </label>
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button>Add a new todo!</button>
    </form>
  );
};

export default NewTodoForm;
