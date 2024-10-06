import React, { useState } from 'react';
import Modal from 'react-modal';

// Custom styling for Modal (optional)
Modal.setAppElement('#root'); // Important for accessibility

const Puzzle = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  const openGameModal = () => {
    setIsGameModalOpen(true);
  };

  const closeGameModal = () => {
    setIsGameModalOpen(false);
  };

  return (
    <div className="puzzle-container">
      <button
        onClick={openGameModal}
        className="mt-20 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 self-center"
      >
        Play Puzzle Game
      </button>

      {/* Modal to display Puzzle Game */}
      <Modal
        isOpen={isGameModalOpen}
        onRequestClose={closeGameModal}
        contentLabel="Puzzle Game"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="p-4">
          <button className="close-button text-red-500" onClick={closeGameModal}>
            Close
          </button>
          <h3 className="text-xl font-semibold mb-4">Puzzle Game: Test Your SDG Knowledge</h3>
          <iframe
            src="/Puzzle Game/index.html" // Path to the puzzle game in the public folder
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Puzzle Game"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Puzzle;
