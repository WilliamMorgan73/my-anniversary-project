import React, { useState, useEffect } from 'react';
import './TodoListModal.css';

const TodoListModal = ({ onClose }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the JSON file when the component loads
    fetch('/future-plans.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch future plans.');
        }
        return response.json();
      })
      .then(data => {
        setPlans(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this runs only once

  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Loading plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Our Future Plans</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
        <ul>
          {plans.map(item => (
            <li key={item.id}>{item.plan}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListModal;