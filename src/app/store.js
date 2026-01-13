// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/TodoSlice';

// Configure the store with todos reducer
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});