import { FC } from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: FC<TodoListProps> = ({ items }) => (
  <ul>
    {items.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

export default TodoList;
