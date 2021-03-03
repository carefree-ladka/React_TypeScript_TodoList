import React from "react";
export const ListItem: React.FC<Todo> = ({ todo, toggle }) => {
  return (
    <div className="listItem">
      <label
        style={{ textDecoration: todo.completed ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => toggle(todo)}
        />
        {todo.text}
      </label>
    </div>
  );
};
