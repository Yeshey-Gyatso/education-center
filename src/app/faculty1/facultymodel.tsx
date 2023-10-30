import React from 'react';

function FacultyModal({ id, name, Education, pic, Motto, showDetails, onClose }) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white p-6 rounded-lg">
        <h2>{name}</h2>
        <p>{Education}</p>
        {/* Other details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default FacultyModal;
