import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Logo from "./assets/icons8-todo-list-50.png";

export default function Todo() {
  const displayData = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(displayData);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div id="sidebar" className="App">
        {/* other elements */}
        <div className="container-fluid">
          <div className="todo-app aio-app">
            <h1 className="">
              To-Do List
              <img src={Logo} alt="" />
            </h1>
            <AddTodo
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
