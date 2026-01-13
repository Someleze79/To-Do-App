// src/App.js
import React from 'react';
import TodoList from './features/todos/TodoList';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  );
};

export default App;