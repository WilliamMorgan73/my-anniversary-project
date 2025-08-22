import React, { useState } from 'react';
import './TodoListModal.css';

const TodoListModal = ({ onClose }) => {
  const [todos, setTodos] = useState([
    'Plan our 3-year anniversary trip',
    'Go to that new restaurant we talked about',
    'Visit the botanical gardens 🌳',
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Our Future Plans</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new plan"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default TodoListModal;