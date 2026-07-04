import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Todos</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
                        <span className="text-gray-800">{todo.text}</span>
                        <button
                            className="ml-4 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
