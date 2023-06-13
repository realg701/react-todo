import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo
}) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onTodoSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form className="custom-row" onSubmit={onTodoSubmit}>
      <input
        type="text"
        id="input-box"
        placeholder="Add your to-do"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="custom-btn" type="submit">
        {editTodo ? "Done" : "Add"}
      </button>
    </form>
  );
}
