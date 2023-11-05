import React from 'react';

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
        <p> Popup </p>
      </div>
    </div>
  );
}

export default Popup;