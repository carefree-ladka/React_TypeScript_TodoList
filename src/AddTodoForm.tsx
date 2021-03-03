import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
}
export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        type="text"
        value={text}
        placeholder="add todos"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
