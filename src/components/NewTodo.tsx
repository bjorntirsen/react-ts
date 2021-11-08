/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, FormEvent, useRef } from 'react';

interface Props {
  handleNewTodo: (a: string) => void;
}

const NewTodo: FC<Props> = ({ handleNewTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    handleNewTodo(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
