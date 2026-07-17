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
                text: action.payload,
                }
                state.todos.push(todo)
        },
        removeTodo: () => {},
        
    }
})