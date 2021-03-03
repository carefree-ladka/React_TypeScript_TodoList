interface Todo {
  text: string;
  completed: boolean;
}
interface Props {
  todo: Todo;
}
type toggle = (selecteTodo: Todo) => void;
type AddTodo = (text: string) => void;
