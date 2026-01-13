// src/components/InfoModal.js
import React from 'react';

const InfoModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Instructions</h2>
        <ul>
          <li>Add a task with button or Enter key</li>
          <li>Edit a task by clicking Edit</li>
          <li>Delete a task by clicking Delete</li>
          <li>Mark a task as completed</li>
          <li>Can't edit a completed task</li>
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default InfoModal;