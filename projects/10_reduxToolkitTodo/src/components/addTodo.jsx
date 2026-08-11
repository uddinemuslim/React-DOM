import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    dispatch(addTodo(trimmed));
    setInput('');
  };

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={addTodoHandler}>
      <label className="sr-only" htmlFor="todo-input">
        New todo
      </label>
      <input
        id="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="min-h-[48px] flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
      <button
        type="submit"
        className="min-h-[48px] rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo; 