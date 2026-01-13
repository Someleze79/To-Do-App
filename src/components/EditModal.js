// src/components/EditModal.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../features/todos/TodoSlice';

const EditModal = ({ closeModal, todo }) => {
  const [newContent, setNewContent] = useState(todo.content);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newContent.trim() === "") {
      setError('Content cannot be empty!');  // Show error if input is empty
      return;
    }
    dispatch(editTodo({ id: todo.id, newContent }));  // Dispatch editTodo action
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Todo</h2>
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default EditModal;