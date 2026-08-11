

import AddTodo from './components/addTodo.jsx';
import Todos from './components/todos.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/95 p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200/70">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Redux Toolkit Todo</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Todo app with Redux Toolkit</h1>
          <p className="mt-3 text-slate-600">Add tasks, remove them, and keep your workflow tidy.</p>
        </header>

        <section className="space-y-6">
          <AddTodo />
          <Todos />
        </section>
      </div>
    </div>
  );
}

export default App; 
