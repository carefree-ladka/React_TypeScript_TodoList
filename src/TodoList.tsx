import React from "react";
import { ListItem } from "./ListItem";

interface Props {
  todos: Todo[];
  toggle: toggle;
}

export const TodoList: React.FC<Props> = ({ todos, toggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.text} todo={todo} toggle={toggle} />
      ))}
    </ul>
  );
};
