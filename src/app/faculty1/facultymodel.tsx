import React from 'react';

interface FacultyModalProps {
  faculty: FacultyData;
  onClose: () => void;
}

export default function FacultyModal({ faculty, onClose }: FacultyModalProps) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <h2>{faculty.name}</h2>
        <p>Education: {faculty.Education}</p>
        <p>Motto: {faculty.Motto}</p>
        {/* Other details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
