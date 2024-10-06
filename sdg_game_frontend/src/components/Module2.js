import sdg1 from '../pages/cardImages/sdg1.avif';
import sdg2 from '../pages/cardImages/sdg2.avif';
import sdg3 from '../pages/cardImages/sdg3.avif';
import sdg4 from '../pages/cardImages/sdg4.avif';
import sdg5 from '../pages/cardImages/sdg5.avif';
import sdg6 from '../pages/cardImages/sdg6.avif';
import sdg7 from '../pages/cardImages/sdg7.avif';
import sdg8 from '../pages/cardImages/sdg8.avif';
import sdg9 from '../pages/cardImages/sdg9.avif';
import sdg10 from '../pages/cardImages/sdg10.avif';
import sdg11 from '../pages/cardImages/sdg11.avif';
import sdg12 from '../pages/cardImages/sdg12.avif';
import sdg13 from '../pages/cardImages/sdg13.avif';
import sdg14 from '../pages/cardImages/sdg14.avif';
import sdg15 from '../pages/cardImages/sdg15.avif';
import sdg16 from '../pages/cardImages/sdg16.avif';
import sdg17 from '../pages/cardImages/sdg17.avif';
import whatWhyHowImage from '../pages/cardImages/whatwhyhow.avif';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
//import { motion, AnimatePresence } from 'framer-motion';

// SDG card component


const SDGCard = ({ number, title, imageUrl, description, onCardClick }) => {
  
  return (
    <motion.div
      className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-64"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onCardClick}
    >
      <div className="absolute top-4 left-4 bg-green-500 text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
        {number}
      </div>
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-md font-semibold text-gray-800 mt-4">{title}</h2>
    </motion.div>
  );
};

const SDGPopup = ({ isOpen, onClose, sdg }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 relative flex flex-col items-center w-11/12 sm:w-2/3 lg:w-1/2" // You can adjust the width for larger size
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              ✖
            </button>

            {/* SWOT Analysis Layout */}
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4 w-full h-80"> {/* Increased height for better visibility */}
              {/* What */}
              <div className="border p-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: "#99FF99" }}>
                <div className="text-center">
                  <h4 className="font-bold">What</h4>
                  <p>{sdg.questions[0].answer}</p>
                </div>
              </div>

              {/* Why */}
              <div className="border p-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: "#D4E1F5" }}>
                <div className="text-center">
                  <h4 className="font-bold">Why</h4>
                  <p>{sdg.questions[1].answer}</p>
                </div>
              </div>

              {/* Image in the Center */}
              <div className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center"> {/* Increased image size */}
                <img src={whatWhyHowImage} alt="What Why How" className="w-full h-full object-cover rounded-lg" /> {/* Rounded corners for image */}
              </div>

              {/* When */}
              <div className="border p-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: "#40E0D0" }}>
                <div className="text-center">
                  <h4 className="font-bold">When</h4>
                  <p>{sdg.questions[2].answer}</p>
                </div>
              </div>

              {/* How */}
              <div className="border p-4 flex items-center justify-center rounded-lg" style={{ backgroundColor: "#FFCCE6" }}>
                <div className="text-center">
                  <h4 className="font-bold">How</h4>
                  <p>{sdg.questions[3].answer}</p>
                </div>
              </div>
            </div>

            {/* Quiz Link Below the SWOT */}
<Link
  to="/puzzle"
  className="block mt-6 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition duration-200 w-32"
>
  Play the Puzzle Game!
</Link>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Landing Page with multiple SDG Cards
const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSDG, setSelectedSDG] = useState(null);
  
  // Game modal state
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  // Functions for game modal
  const closeGameModal = () => setIsGameModalOpen(false);
  const openGameModal = () => setIsGameModalOpen(true);

  const navigate = useNavigate();

  const sdgCards = [
  {
    number: 1,
    title: 'No Poverty',
    imageUrl: sdg1,
    description: 'End poverty in all forms.',
    questions: [
      { question: 'What causes poverty?', answer: 'Lack of resources, education, and opportunities.' },
      { question: 'How can we end poverty?', answer: 'Promoting equal access to education and employment.' },
      { question: 'What role does government play?', answer: 'Implementing policies that promote economic growth.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 2,
    title: 'Zero Hunger',
    imageUrl: sdg2,
    description: 'End hunger and achieve food security.',
    questions: [
      { question: 'What are the causes of hunger?', answer: 'Food scarcity, poverty, and climate change.' },
      { question: 'How can we achieve food security?', answer: 'Improving agricultural productivity.' },
      { question: 'How can individuals help?', answer: 'Donating food and raising awareness.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 3,
    title: 'Good Health and Well-being',
    imageUrl: sdg3,
    description: 'Ensure healthy lives.',
    questions: [
      { question: 'What factors affect health?', answer: 'Access to healthcare, nutrition, and lifestyle.' },
      { question: 'How can we promote well-being?', answer: 'Encouraging healthy habits and improving access to healthcare.' },
      { question: 'What is the role of governments?', answer: 'Creating policies to support health infrastructure.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 4,
    title: 'Quality Education',
    imageUrl: sdg4,
    description: 'Promote lifelong learning.',
    questions: [
      { question: 'Why is education important?', answer: 'It fosters knowledge, skills, and opportunities.' },
      { question: 'How can education be improved?', answer: 'By investing in schools and teacher training.' },
      { question: 'What challenges affect education?', answer: 'Lack of resources, inequality, and access.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 5,
    title: 'Gender Equality',
    imageUrl: sdg5,
    description: 'Achieve gender equality.',
    questions: [
      { question: 'Why is gender equality important?', answer: 'It promotes fairness and maximizes human potential.' },
      { question: 'How can gender equality be achieved?', answer: 'Through equal opportunities and rights for all genders.' },
      { question: 'What challenges exist?', answer: 'Cultural norms and systemic discrimination.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 6,
    title: 'Clean Water and Sanitation',
    imageUrl: sdg6,
    description: 'Ensure availability and sustainable water management.',
    questions: [
      { question: 'What are the causes of water scarcity?', answer: 'Overuse, pollution, and climate change.' },
      { question: 'How can we ensure clean water for all?', answer: 'Investing in infrastructure and sustainable practices.' },
      { question: 'Why is sanitation important?', answer: 'It prevents diseases and promotes health.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 7,
    title: 'Affordable and Clean Energy',
    imageUrl: sdg7,
    description: 'Ensure access to affordable, reliable energy.',
    questions: [
      { question: 'Why is clean energy important?', answer: 'It reduces pollution and combats climate change.' },
      { question: 'What are sustainable energy sources?', answer: 'Solar, wind, and hydroelectric power.' },
      { question: 'How can energy be made affordable?', answer: 'Through innovations and investments in clean technologies.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 8,
    title: 'Decent Work and Economic Growth',
    imageUrl: sdg8,
    description: 'Promote sustained economic growth.',
    questions: [
      { question: 'What is decent work?', answer: 'Employment with fair wages and conditions.' },
      { question: 'How can economic growth be sustained?', answer: 'By encouraging innovation and supporting small businesses.' },
      { question: 'What challenges threaten growth?', answer: 'Economic inequality and lack of opportunities.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 9,
    title: 'Industry, Innovation, and Infrastructure',
    imageUrl: sdg9,
    description: 'Build resilient infrastructure.',
    questions: [
      { question: 'Why is infrastructure important?', answer: 'It supports economic growth and development.' },
      { question: 'How can innovation drive progress?', answer: 'By creating new technologies and improving efficiency.' },
      { question: 'What challenges does infrastructure face?', answer: 'Aging systems and lack of investment.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    imageUrl: sdg10,
    description: 'Reduce inequality within and among countries.',
    questions: [
      { question: 'What causes inequality?', answer: 'Economic disparity, discrimination, and policies.' },
      { question: 'How can we reduce inequality?', answer: 'By ensuring equal access to opportunities.' },
      { question: 'What is the role of government?', answer: 'Implementing policies that promote fairness.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 11,
    title: 'Sustainable Cities and Communities',
    imageUrl: sdg11,
    description: 'Make cities inclusive, safe, and resilient.',
    questions: [
      { question: 'What makes a city sustainable?', answer: 'Efficient resource use and green infrastructure.' },
      { question: 'How can we create resilient communities?', answer: 'By preparing for climate risks and fostering social inclusion.' },
      { question: 'What challenges do cities face?', answer: 'Overpopulation and environmental degradation.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 12,
    title: 'Responsible Consumption and Production',
    imageUrl: sdg12,
    description: 'Ensure sustainable consumption and production patterns.',
    questions: [
      { question: 'What is sustainable consumption?', answer: 'Using resources in a way that minimizes waste and harm.' },
      { question: 'How can production be more responsible?', answer: 'By using eco-friendly materials and reducing waste.' },
      { question: 'What are the benefits?', answer: 'Preserving the environment and conserving resources.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 13,
    title: 'Climate Action',
    imageUrl: sdg13,
    description: 'Take urgent action to combat climate change.',
    questions: [
      { question: 'What causes climate change?', answer: 'Greenhouse gas emissions and deforestation.' },
      { question: 'How can we mitigate climate change?', answer: 'By reducing emissions and protecting forests.' },
      { question: 'What are the consequences of inaction?', answer: 'Rising temperatures and extreme weather.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }

    ],
  },
  {
    number: 14,
    title: 'Life Below Water',
    imageUrl: sdg14,
    description: 'Conserve and sustainably use the oceans.',
    questions: [
      { question: 'What threatens marine life?', answer: 'Pollution, overfishing, and habitat destruction.' },
      { question: 'How can we protect oceans?', answer: 'Reducing plastic waste and creating marine reserves.' },
      { question: 'Why are oceans important?', answer: 'They regulate climate and support biodiversity.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 15,
    title: 'Life on Land',
    imageUrl: sdg15,
    description: 'Protect and restore ecosystems on land.',
    questions: [
      { question: 'What are the major threats to ecosystems?', answer: 'Deforestation, pollution, and climate change.' },
      { question: 'How can we protect biodiversity?', answer: 'By conserving natural habitats and reducing deforestation.' },
      { question: 'Why is biodiversity important?', answer: 'It supports ecosystems and human survival.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 16,
    title: 'Peace, Justice and Strong Institutions',
    imageUrl: sdg16,
    description: 'Promote peaceful and inclusive societies.',
    questions: [
      { question: 'What is the importance of peace?', answer: 'It promotes stability and development.' },
      { question: 'How can justice be ensured?', answer: 'By creating strong legal frameworks and fighting corruption.' },
      { question: 'Why do institutions matter?', answer: 'They uphold laws and ensure fair governance.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  },
  {
    number: 17,
    title: 'Partnership for the Goals',
    imageUrl: sdg17,
    description: 'Strengthen the means of implementation and revitalize global partnerships.',
    questions: [
      { question: 'Why are partnerships important?', answer: 'They bring together resources and expertise.' },
      { question: 'How can we build strong partnerships?', answer: 'By fostering collaboration between nations and organizations.' },
      { question: 'What are the benefits of global cooperation?', answer: 'It accelerates progress towards achieving the SDGs.' },
      { question: 'How does poverty affect communities?', answer: 'It leads to increased crime, poor health, and decreased education.' }
    ],
  }
];


return (
  <div className="flex flex-col min-h-screen bg-gray-100 p-6">
    {/* SDG Cards Container */}
    <div className="flex flex-wrap justify-center items-start gap-6">
      {sdgCards.map((sdg, index) => (
        <motion.div
          key={index}
          className="flex-none w-full sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <SDGCard
            number={sdg.number}
            title={sdg.title}
            imageUrl={sdg.imageUrl}
            description={sdg.description}
            onCardClick={() => setSelectedSDG(sdg)}
          />
        </motion.div>
      ))}
    </div>

    {/* SDG Popup */}
    <SDGPopup
      isOpen={!!selectedSDG}
      onClose={() => setSelectedSDG(null)}
      sdg={selectedSDG}
    />

    {/* Spacer div to push button to bottom */}
    <div className="flex-grow"></div>

    {/* Button to open the SearchWords game modal */}
    <button
      onClick={openGameModal}
      className="mt-20 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 self-center"
    >
      Play SearchWords Game
    </button>

    {/* Modal to display SearchWords Game */}
    <Modal
      isOpen={isGameModalOpen}
      onRequestClose={closeGameModal}
      contentLabel="SearchWords Game"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="p-4">
        <button className="close-button text-red-500" onClick={closeGameModal}>
          Close
        </button>
        <h3 className="text-xl font-semibold mb-4">SearchWords: Test Your SDG Knowledge</h3>
        <iframe
          src="/SearchWord/wordsearch.html" // Path to the memory game
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="SearchWords Game"
        />
      </div>
    </Modal>
    <button
        onClick={() => navigate('/module3')} // Navigates to Module3
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 self-center"
      >
        Complete Module2
      </button>
  </div>
);
};

export default LandingPage;