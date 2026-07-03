import { createContext, createElement, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = ({ children, value }) => {
  return createElement(TodoContext.Provider, { value }, children);
};