import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      Future Plans 🚀
    </button>
  );
};

export default FloatingButton;