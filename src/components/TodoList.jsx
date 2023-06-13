import React from "react";

export default function TodoList({ todos, setTodos, editTodo, setEditTodo }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <ul className="unordered-list" id="list-container">
      {todos.map((todo) => (
        <li className="list-items" key={todo.id}>
          <input
            type="text"
            className={`list ${todo.completed ? "strike" : ""}`}
            value={todo.title}
            onChange={(event) => {
              event.preventDefault();
            }}
          />
          <button
            className={`check-btn ${todo.completed ? "checked" : ""}`}
            onClick={() => handleComplete(todo)}
          ></button>
          <button
            className="edit-btn"
            onClick={() => handleEdit(todo)}
          ></button>
          <button
            className="del-btn"
            onClick={() => handleDelete(todo)}
          ></button>
        </li>
      ))}
    </ul>
  );
}
