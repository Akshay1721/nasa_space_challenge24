import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; // Import Modal from react-modal
import poverty from '../assets/videos/Social Equity and Well Being.mp4'
import health from '../assets/videos/Governance and Ecosystems.mp4'
import growth from '../assets/videos/Economic Growth and Infrastructure.mp4'
import climate from '../assets/videos/Environmental Sustainability.mp4'

const sdgGroups = [
  { title: "No Poverty & Zero Hunger", videoUrl: poverty },
  { title: "Good Health & Quality Education", videoUrl: health },
  { title: "Affordable Energy & Economic Growth", videoUrl: growth },
  { title: "Climate Action & Life Below Water", videoUrl: climate },
];

const Module1 = ({ onComplete }) => {
  const navigate = useNavigate();

  const handleCompleteModule1 = () => {
    onComplete();
    navigate('/module2');
  };

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const handleMemoryGameClick = () => {
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when clicked outside or on close button
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Learn About the SDGs</h2>
      <div className="grid grid-cols-2 gap-6">
        {sdgGroups.map((group, index) => (
          <motion.div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`relative w-full h-64 bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden ${
              flippedCardIndex === index ? 'transform rotate-y-180' : ''
            }`}
            style={{ perspective: "1000px" }}
          >
            {/* Front of the card */}
            <motion.div
              className={`absolute w-full h-full p-6 ${
                flippedCardIndex === index ? 'hidden' : 'block'
              }`}
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p>Click to learn more!</p>
            </motion.div>

            {/* Back of the card */}
            <motion.div
              className={`absolute w-full h-full ${
                flippedCardIndex === index ? 'block' : 'hidden'
              }`}
            >
              {/* Video for each SDG */}
              <video className="w-full h-full" controls>
                <source src={group.videoUrl} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Complete Button */}
      {flippedCardIndex !== null && (
        <button
          className="complete-button bg-green-500 text-white p-4 rounded-lg mt-4"
          onClick={handleCompleteModule1}
        >
          Complete Module 1
        </button>
      )}

      {/* Memory Game Section */}
      <div className="mt-8 text-center">
        {/* Button to toggle the memory game */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMemoryGameClick}
          className="bg-blue-500 text-white p-4 rounded-lg"
        >
          Let's test your learnings
        </motion.button>
      </div>

      {/* Modal to display Memory Game */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Memory Game"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="p-4">
          <button className="close-button text-red-500" onClick={closeModal}>
            Close
          </button>
          <h3 className="text-xl font-semibold mb-4">Memory Game: Test Your SDG Knowledge</h3>
          <iframe
            src="/MemoryGame/index.html" // Path to the memory game
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Memory Game"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Module1;
