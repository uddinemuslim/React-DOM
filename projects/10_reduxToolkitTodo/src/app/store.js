/*
Steps to ccreate and configure store

1. Import Configure store from redux-toolkit'\
2. Create Reducer called slices in the reduxToolkit --->    Create Initial state inside the slice 

*/

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})