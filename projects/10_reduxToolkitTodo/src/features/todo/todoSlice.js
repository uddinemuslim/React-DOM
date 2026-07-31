import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: nanoid, text: "Initial State By Muslim", completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload, // Can written action.payload.text
                }
                state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer