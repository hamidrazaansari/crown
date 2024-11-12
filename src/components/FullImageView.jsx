import React from "react";
const FullImageView = ({ imageUrl, onClose }) => {
    
    return (
      <div className="full-image-view">
        <div className="overlay" onClick={onClose}></div>
        <div className="image-container">
          <img src={imageUrl} alt="Full View" />
          <button onClick={onClose} className="close-btn">Close</button>
        </div>
      </div>
    );
  };
  export default FullImageView