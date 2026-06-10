"use client";
import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (input?.trim().length <= 0) return;
    const todo = {
      id: todos?.length + 1,
      value: input?.trim(),
      isCompleted: false,
    };

    setTodos((prev) => [...prev, todo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id == todo.id) {
          return {
            ...todo,
            isCompleted: !todo?.isCompleted,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="m-5 space-y-3">
      <div className="space-x-2">
        <input
          className=" p-1.5 border border-gray-300 rounded-md"
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          onClick={addTodos}
          className="bg-blue-400 rounded-lg text-white p-1.5"
        >
          Add
        </button>
      </div>
      <div>
        {todos?.map((todo) => {
          return (
            <div className="space-x-2 space-y-3">
              <input
                onChange={() => {
                  toggleTodo(todo?.id);
                }}
                type="checkbox"
                checked={todo?.isCompleted}
              />
              <span className={todo?.isCompleted ? "line-through" : ""}>
                {todo?.value}
              </span>
              <button
                onClick={() => {
                  deleteTodo(todo?.id);
                }}
                className="bg-red-400 px-1 rounded-lg text-white "
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
