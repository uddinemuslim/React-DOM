import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/80">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Your tasks</h2>
        <span className="text-sm text-slate-500">{todos.length} items</span>
      </div>
      {todos.length === 0 ? (
        <p className="text-slate-600">No todos yet. Add one to get started.</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="text-slate-800">{todo.text}</span>
              <button
                type="button"
                className="rounded-full bg-rose-500 px-3 py-1 text-sm font-semibold text-white transition hover:bg-rose-600"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos; 