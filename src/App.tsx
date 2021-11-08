import { FC, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: FC = () => {
  const [todos, setTodos] = useState([{ id: 't1', text: 'Finish the course' }]);
  const newTodoHandler = (todoText: string) => {
    const id = `t${todos.length + 1}`;
    setTodos((oldTodos) => [...oldTodos, { id, text: todoText }]);
  };
  return (
    <div className='App'>
      <NewTodo handleNewTodo={newTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
