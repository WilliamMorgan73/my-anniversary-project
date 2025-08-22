import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ children, onClick, position = 'bottom-right' }) => {
  return (
    <button className={`floating-button ${position}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default FloatingButton;