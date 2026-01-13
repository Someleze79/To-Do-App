// src/components/Counter.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

const Counter = () => {
  const todoCount = useSelector(state => state.todos.list.length);

  return (
    <div className="counter">
      <span>{todoCount} Todo{todoCount !== 1 ? 's' : ''}</span>
    </div>
  );
};

export default Counter;