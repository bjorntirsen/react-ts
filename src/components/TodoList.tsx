import { FC } from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({ items, onDeleteTodo }) => (
  <ul>
    {items.map((todo) => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button type='button' onClick={onDeleteTodo.bind(null, todo.id)}>
          DELETE
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
