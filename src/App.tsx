import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialtodos: Todo[] = [
  {
    text: "Let's code now",
    completed: true
  },
  {
    text: "Learn Typescript.",
    completed: false
  }
];
export default function App() {
  const [todos, setTodos] = useState(initialtodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false };
    newTodo.text.trim() !== "" && setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggle={toggleTodo} />
    </div>
  );
}
