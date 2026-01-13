// src/features/todos/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleComplete } from './TodoSlice';
import EditModal from '../../components/EditModal';
import InfoModal from '../../components/InfoModal';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector(state => state.todos.list);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [editData, setEditData] = useState({});

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));  // Dispatch addTodo action
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const openEditModal = (todo) => {
    setEditData(todo);
    setEditModalOpen(true);  // Open the edit modal
  };

  return (
    <div className="container">
      <h1>React Redux To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a to-do..."
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => setInfoOpen(true)}>ℹ️ Info</button>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span>{todo.content}</span>
            <div className="actions">
              <button disabled={todo.completed} onClick={() => openEditModal(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              <button onClick={() => dispatch(toggleComplete(todo.id))}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {editModalOpen && <EditModal closeModal={() => setEditModalOpen(false)} todo={editData} />}
      {infoOpen && <InfoModal closeModal={() => setInfoOpen(false)} />}
    </div>
  );
};

export default TodoList;