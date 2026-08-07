import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTodo} "../features/todo/todoSlice.js"

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        </>
    )
}