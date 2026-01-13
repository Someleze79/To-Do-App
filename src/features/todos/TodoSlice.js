// src/features/todos/TodoSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with two to-dos
const initialState = {
  list: [
    { id: 1, content: "Content1", completed: false },
    { id: 2, content: "Content2", completed: false },
  ]
};

// Create slice with reducers to manage to-dos
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new to-do
    addTodo: (state, action) => {
      if (action.payload.trim() === "") return;  // Prevent adding empty to-do
      state.list.push({ id: Date.now(), content: action.payload, completed: false });
    },
    // Delete a to-do by id
    deleteTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    // Edit a specific to-do's content
    editTodo: (state, action) => {
      const { id, newContent } = action.payload;
      const todo = state.list.find(todo => todo.id === id);
      if (todo && newContent.trim() !== "") {
        todo.content = newContent;  // Update to-do content
      }
    },
    // Toggle the completed state of a to-do
    toggleComplete: (state, action) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;  // Toggle the completed state
      }
    }
  }
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;