// Quizzes.js
import React, { useState } from 'react';

// SDG 1 Quiz Component
export const SDG1Quiz = () => {
  const questions = [
    {
      question: "Your school is running a food drive. What is the best way to ensure the food helps reduce poverty?",
      options: [
        { label: "A", text: "Only accept luxury items", correct: false },
        { label: "B", text: "Focus on nutritious and non-perishable food items", correct: true },
        { label: "C", text: "Allow students to donate only junk food", correct: false },
        { label: "D", text: "Ignore expiration dates when collecting food", correct: false },
      ],
    },
    {
      question: "If you could donate one thing to help families in poverty, what would be the most impactful?",
      options: [
        { label: "A", text: "Old clothes you don’t wear", correct: false },
        { label: "B", text: "Books for personal development", correct: false },
        { label: "C", text: "Money to local charities supporting job training", correct: true },
        { label: "D", text: "Money to local charities supporting job training.", correct: false },
      ],
    },

    {
      question: "How can a local business support its community in reducing poverty?",
      options: [
        { label: "A", text: "By raising prices to make more profit", correct: false },
        { label: "B", text: "By offering job training and internships to local youth", correct: true },
        { label: "C", text: "By only hiring workers from outside the community", correct: false },
        { label: "D", text: "By donating leftover products to wealthy families", correct: false },
      ],
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 1 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

// SDG 2 Quiz Component
export const SDG2Quiz = () => {
  const questions = [
    {
      question: " Your school is planning a healthy eating day. Which activity best supports Zero Hunger?",
      options: [
        { label: "A", text: "Only serve fast food to student", correct: false },
        { label: "B", text: "Encourage students to bring nutritious, home-cooked meals", correct: true },
        { label: "C", text: "Have a contest to see who can eat the most unhealthy snacks", correct: false },
        { label: "D", text: " Promote only desserts and sugary foods", correct: false },
      ],
    },
    {
      question: "What can students do to reduce food waste at school?",
      options: [
        { label: "A", text: "Throw away leftovers after lunch", correct: false },
        { label: "B", text: "Organize a “share table” for uneaten food", correct: true },
        { label: "C", text: "Ignore food waste because it doesn’t affect them", correct: false },
        { label: "D", text: "Demand larger portions of food", correct: false },
      ],
    },
    {
      question: "Why is it important to support local farmers in reducing hunger?",
      options: [
        { label: "A", text: "They have no impact on the economy", correct: false },
        { label: "B", text: "They provide fresh, seasonal produce that supports nutrition", correct: true },
        { label: "C", text: "Their products are usually more expensive and less healthy", correct: false },
        { label: "D", text: "They can only sell to restaurants", correct: false },
      ],
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 2 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG3Quiz = () => {
  const questions = [
    {
      question: "How can schools promote mental health awareness?",
      options: [
        { label: "A", text: "By organizing mental health awareness events and discussions.", correct: true },
        { label: "B", text: "By ignoring students’ mental health issues.", correct: false },
        { label: "C", text: "By making mental health a taboo topic.", correct: false },
        { label: "D", text: "By emphasizing only academic performance.", correct: false },
      ],
    },
    {
      question: "What role does physical activity play in promoting good health?",
      options: [
        { label: "A", text: "It helps students focus better in class.", correct: true },
        { label: "B", text: "It only benefits athletes.", correct: false },
        { label: "C", text: "It leads to exhaustion and burnout.", correct: false },
        { label: "D", text: "It has no impact on overall health.", correct: false },
      ],
    },
    {
      question: "Why is it essential to have access to clean water at school?",
      options: [
        { label: "A", text: "It is not important for students’ health.", correct: false },
        { label: "B", text: "It prevents dehydration and promotes better concentration.", correct: true },
        { label: "C", text: "It can be replaced with soda.", correct: false },
        { label: "D", text: "It only matters during gym class.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 3 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

// SDG 4 Quiz Component
export const SDG4Quiz = () => {
  const questions = [
    {
      question: "What does inclusive education mean?",
      options: [
        { label: "A", text: "Education that excludes some students", correct: false },
        { label: "B", text: "Education accessible to all, regardless of ability", correct: true },
        { label: "C", text: "Education only for the wealthy", correct: false },
        { label: "D", text: "Education that focuses solely on academic subjects", correct: false },
      ],
    },
    {
      question: "How can technology support education for all?",
      options: [
        { label: "A", text: "By providing resources and tools for remote learning", correct: true },
        { label: "B", text: "By limiting access to information", correct: false },
        { label: "C", text: "By focusing only on entertainment", correct: false },
        { label: "D", text: "By charging high fees for digital content", correct: false },
      ],
    },
    {
      question: "Why is teacher training essential for quality education?",
      options: [
        { label: "A", text: "It helps teachers understand their subjects better", correct: true },
        { label: "B", text: "It is not important for education quality", correct: false },
        { label: "C", text: "It makes teaching more difficult", correct: false },
        { label: "D", text: "It only benefits students who want to become teachers", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 4 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG5Quiz = () => {
  const questions = [
    {
      question: "How can schools promote gender equality in sports?",
      options: [
        { label: "A", text: "By offering only boys' teams.", correct: false },
        { label: "B", text: "By ensuring equal funding and opportunities for both boys’ and girls’ teams.", correct: true },
        { label: "C", text: "By discouraging girls from playing sports.", correct: false },
        { label: "D", text: "By giving boys preferential treatment in games.", correct: false },
      ],
    },
    {
      question: "What is an example of gender discrimination that might happen at school?",
      options: [
        { label: "A", text: "Allowing all students to participate in class.", correct: false },
        { label: "B", text: "Only allowing boys to lead school projects or clubs.", correct: true },
        { label: "C", text: "Encouraging all students to join any activity.", correct: false },
        { label: "D", text: "Providing equal access to resources for all.", correct: false },
      ],
    },
    {
      question: "How can students challenge gender stereotypes?",
      options: [
        { label: "A", text: "By participating in discussions about equality and inclusivity.", correct: true },
        { label: "B", text: "By ignoring the topic and maintaining the status quo.", correct: false },
        { label: "C", text: "By promoting outdated stereotypes.", correct: false },
        { label: "D", text: "By making fun of classmates who challenge stereotypes.", correct: false },
      ],
    },

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 5 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG6Quiz = () => {
  const questions = [
    {
      question: "How can your school promote water conservation?",
      options: [
        { label: "A", text: "By encouraging wasteful use of water.", correct: false },
        { label: "B", text: "By installing water-saving fixtures and educating students on their use.", correct: true },
        { label: "C", text: "By ignoring leaky faucets.", correct: false },
        { label: "D", text: "By using bottled water only.", correct: false },
      ],
    },
    {
      question: "Why is access to clean water important for students’ health?",
      options: [
        { label: "A", text: "It doesn’t affect health.", correct: false },
        { label: "B", text: "It prevents waterborne diseases and promotes better learning.", correct: true },
        { label: "C", text: "It only matters during sports events.", correct: false },
        { label: "D", text: "It can be replaced with soda or juice.", correct: false },
      ],
    },
    {
      question: "What can students do to help keep their school’s water supply clean?",
      options: [
        { label: "A", text: "Dispose of waste improperly.", correct: false },
        { label: "B", text: "Organize clean-up days for local water bodies.", correct: true },
        { label: "C", text: "Ignore the pollution around them.", correct: false },
        { label: "D", text: "Waste water during breaks.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 6 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG7Quiz = () => {
  const questions = [
    {
      question: "What can students do to promote energy efficiency at school?",
      options: [
        { label: "A", text: "Leave lights on when leaving a room.", correct: false },
        { label: "B", text: "Encourage turning off unused electronics and lights.", correct: true },
        { label: "C", text: "Use energy-inefficient devices only.", correct: false },
        { label: "D", text: "Ignore the energy consumption issue.", correct: false },
      ],
    },
    {
      question: "Why is renewable energy important for the future?",
      options: [
        { label: "A", text: "It’s more expensive and less accessible.", correct: false },
        { label: "B", text: "It reduces pollution and helps combat climate change.", correct: true },
        { label: "C", text: "It’s not as reliable as fossil fuels.", correct: false },
        { label: "D", text: "It has no impact on energy consumption.", correct: false },
      ],
    },
    {
      question: "How can your school utilize solar energy?",
      options: [
        { label: "A", text: "By installing solar panels to generate clean energy.", correct: true },
        { label: "B", text: "By ignoring the option of renewable energy sources.", correct: false },
        { label: "C", text: "By using only traditional energy sources.", correct: false },
        { label: "D", text: "By discouraging students from learning about energy sources.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 7 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG8Quiz = () => {
  const questions = [
    {
      question: "What can your school do to prepare students for decent work?",
      options: [
        { label: "A", text: "Ignore career counseling and guidance.", correct: false },
        { label: "B", text: "Offer workshops on resume building and interview skills.", correct: true },
        { label: "C", text: "Focus solely on academic subjects without practical application.", correct: false },
        { label: "D", text: "Discourage vocational training.", correct: false },
      ],
    },
    {
      question: "How can students support local businesses?",
      options: [
        { label: "A", text: "Only shop at large, international companies.", correct: false },
        { label: "B", text: "Participate in school events that promote local entrepreneurship.", correct: true },
        { label: "C", text: "Ignore local products and services.", correct: false },
        { label: "D", text: "Criticize local businesses without offering solutions.", correct: false },
      ],
    },
    {
      question: "Why is it important for everyone to have equal access to job opportunities?",
      options: [
        { label: "A", text: "It can create competition among individuals.", correct: false },
        { label: "B", text: "It fosters inclusivity and improves community development.", correct: true },
        { label: "C", text: "It doesn’t affect community growth.", correct: false },
        { label: "D", text: "It leads to inequality and social unrest.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 8 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG9Quiz = () => {
  const questions = [
    {
      question: "How can students contribute to creating innovative solutions for their community?",
      options: [
        { label: "A", text: "Ignore the problems around them.", correct: false },
        { label: "B", text: "Participate in hackathons or innovation challenges.", correct: true },
        { label: "C", text: "Stick to traditional methods without considering improvements.", correct: false },
        { label: "D", text: "Disregard new technologies.", correct: false },
      ],
    },
    {
      question: "Why is sustainable infrastructure important for development?",
      options: [
        { label: "A", text: "It doesn’t impact growth.", correct: false },
        { label: "B", text: "It enhances connectivity and access to resources.", correct: true },
        { label: "C", text: "It creates more environmental problems.", correct: false },
        { label: "D", text: "It is too expensive to implement.", correct: false },
      ],
    },
    {
      question: "What role can technology play in advancing industries?",
      options: [
        { label: "A", text: "It can slow down processes.", correct: false },
        { label: "B", text: "It improves efficiency and creates new job opportunities.", correct: true },
        { label: "C", text: "It leads to job losses only.", correct: false },
        { label: "D", text: "It is not relevant to modern industries.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 9 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG10Quiz = () => {
  const questions = [
    {
      question: "How can your school support students from different backgrounds?",
      options: [
        { label: "A", text: "Ignore the diverse needs of students.", correct: false },
        { label: "B", text: "Implement programs that promote inclusivity and equality.", correct: true },
        { label: "C", text: "Focus only on the top-performing students.", correct: false },
        { label: "D", text: "Make fun of students from different backgrounds.", correct: false },
      ],
    },
    {
      question: "What is one way students can advocate for equality in their community?",
      options: [
        { label: "A", text: "Ignore issues related to inequality.", correct: false },
        { label: "B", text: "Organize events that raise awareness about marginalized groups.", correct: true },
        { label: "C", text: "Only support the most popular causes.", correct: false },
        { label: "D", text: "Dismiss the concerns of others.", correct: false },
      ],
    },
    {
      question: "Why is it essential to provide equal opportunities for all students?",
      options: [
        { label: "A", text: "It creates competition and hostility.", correct: false },
        { label: "B", text: "It helps build a fairer society and empowers everyone.", correct: true },
        { label: "C", text: "It doesn’t affect anyone’s success.", correct: false },
        { label: "D", text: "It should only focus on the wealthy.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 10 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG11Quiz = () => {
  const questions = [
    {
      question: "How can students promote sustainable practices in their school?",
      options: [
        { label: "A", text: "Encourage wasteful behavior.", correct: false },
        { label: "B", text: "Start recycling and composting programs.", correct: true },
        { label: "C", text: "Ignore waste management issues.", correct: false },
        { label: "D", text: "Focus only on beautifying the school.", correct: false },
      ],
    },
    {
      question: "What can students do to improve transportation in their community?",
      options: [
        { label: "A", text: "Use cars for every short distance.", correct: false },
        { label: "B", text: "Advocate for public transport options and safe biking paths.", correct: true },
        { label: "C", text: "Ignore transportation issues.", correct: false },
        { label: "D", text: "Demand more parking spaces only.", correct: false },
      ],
    },
    {
      question: "Why is it important to involve young people in urban planning?",
      options: [
        { label: "A", text: "Their opinions are irrelevant.", correct: false },
        { label: "B", text: "They can bring fresh ideas and perspectives to community development.", correct: true },
        { label: "C", text: "It should only be handled by adults.", correct: false },
        { label: "D", text: "They don’t understand community issues.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 11 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export const SDG12Quiz = () => {
  const questions = [
    {
      question: "How can students practice responsible consumption in their daily lives?",
      options: [
        { label: "A", text: "Buy new clothes every week without considering sustainability.", correct: false },
        { label: "B", text: "Choose to buy second-hand items or sustainably produced goods.", correct: true },
        { label: "C", text: "Ignore waste and consumption issues.", correct: false },
        { label: "D", text: "Focus solely on luxury brands.", correct: false },
      ],
    },
    {
      question: "What can schools do to promote sustainable practices among students?",
      options: [
        { label: "A", text: "Encourage wastefulness during lunch.", correct: false },
        { label: "B", text: "Implement 'no waste' days where students bring minimal packaging.", correct: true },
        { label: "C", text: "Ignore recycling and composting efforts.", correct: false },
        { label: "D", text: "Focus solely on aesthetics rather than sustainability.", correct: false },
      ],
    },
    {
      question: "Why is it important to reduce single-use plastics?",
      options: [
        { label: "A", text: "It doesn’t affect the environment.", correct: false },
        { label: "B", text: "It helps decrease pollution and protect marine life.", correct: true },
        { label: "C", text: "It is a trend that will pass.", correct: false },
        { label: "D", text: "It only matters for adults.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>SDG 12 Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};
export const SDG13Quiz = () => {
  const questions = [
    {
      question: "What is a practical step students can take to combat climate change at school?",
      options: [
        { label: "A", text: "Ignore climate-related discussions.", correct: false },
        { label: "B", text: "Start a tree-planting initiative.", correct: true },
        { label: "C", text: "Waste resources without concern.", correct: false },
        { label: "D", text: "Focus only on academic performance.", correct: false },
      ],
    },
    {
      question: "Why is it important for young people to learn about climate change?",
      options: [
        { label: "A", text: "It doesn’t affect their future.", correct: false },
        { label: "B", text: "They will be the next generation to face its impacts and drive solutions.", correct: true },
        { label: "C", text: "It is a topic meant for scientists only.", correct: false },
        { label: "D", text: "It can be ignored until adulthood.", correct: false },
      ],
    },
    {
      question: "How can students promote sustainable transportation?",
      options: [
        { label: "A", text: "Encourage carpooling or biking to school.", correct: true },
        { label: "B", text: "Use individual cars for every short distance.", correct: false },
        { label: "C", text: "Ignore the issue of transportation emissions.", correct: false },
        { label: "D", text: "Promote the use of public transport only for tourists.", correct: false },
      ],
    },
  ];

  return <Quiz questions={questions} title="SDG 13 Quiz" />;
};

export const SDG14Quiz = () => {
  const questions = [
    {
      question: "How can students help protect marine life in their community?",
      options: [
        { label: "A", text: "Participate in beach clean-up events.", correct: true },
        { label: "B", text: "Ignore local waterways and oceans.", correct: false },
        { label: "C", text: "Promote single-use plastics.", correct: false },
        { label: "D", text: "Focus solely on terrestrial issues.", correct: false },
      ],
    },
    {
      question: "Why is it important to protect coral reefs?",
      options: [
        { label: "A", text: "They are irrelevant to ocean health.", correct: false },
        { label: "B", text: "They support biodiversity and protect coastlines.", correct: true },
        { label: "C", text: "They only matter to scientists.", correct: false },
        { label: "D", text: "They can be easily replaced.", correct: false },
      ],
    },
    {
      question: "What can students do to reduce plastic pollution?",
      options: [
        { label: "A", text: "Advocate for using plastic bags and bottles.", correct: false },
        { label: "B", text: "Promote the use of reusable bags and bottles.", correct: true },
        { label: "C", text: "Ignore the issue of plastic waste.", correct: false },
        { label: "D", text: "Focus only on recycling.", correct: false },
      ],
    },
  ];

  return <Quiz questions={questions} title="SDG 14 Quiz" />;
};

// const Quiz = ({ questions, title }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setShowAnswer(true);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     setSelectedOption(null);
//     setShowAnswer(false);
//   };

//   const handleResetQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setShowAnswer(false);
//   };

//   return (
//     <div>
//       <h1>{title}</h1>
//       {currentQuestionIndex < questions.length ? (
//         <div>
//           <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
//           <ul>
//             {questions[currentQuestionIndex].options.map((option, idx) => (
//               <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
//                 {option.label}. {option.text}
//               </li>
//             ))}
//           </ul>
//           {showAnswer && selectedOption && (
//             <div>
//               <p>
//                 {selectedOption.correct ? "Correct!" : "Incorrect!"}
//                 {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
//               </p>
//             </div>
//           )}
//           <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Quiz Completed!</h2>
//           <button onClick={handleResetQuiz}>Restart Quiz</button>
//         </div>
//       )}
//     </div>
//   );
// };

export const SDG15Quiz = () => {
  const questions = [
    {
      question: "What is the main goal of SDG 15?",
      options: [
        { label: "A", text: "Protect marine ecosystems", correct: false },
        { label: "B", text: "Combat climate change", correct: false },
        { label: "C", text: "Sustainably manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss", correct: true },
        { label: "D", text: "Improve global partnerships for sustainable development", correct: false },
      ],
    },
    {
      question: "Which of the following is a major cause of biodiversity loss on land?",
      options: [
        { label: "A", text: "Overfishing", correct: false },
        { label: "B", text: "Deforestation", correct: true },
        { label: "C", text: "Global warming", correct: false },
        { label: "D", text: "None of the above", correct: false },
      ],
    },
    {
      question: "What percentage of the world’s land is covered by forests, according to recent data?",
      options: [
        { label: "A", text: "10%", correct: false },
        { label: "B", text: "30%", correct: true },
        { label: "C", text: "50%", correct: false },
        { label: "D", text: "70%", correct: false },
      ],
    },
  ];

  return <Quiz questions={questions} title="SDG 15 Quiz" />;
};

export const SDG16Quiz = () => {
  const questions = [
    {
      question: "What does SDG 16 focus on?",
      options: [
        { label: "A", text: "Reducing pollution", correct: false },
        { label: "B", text: "Promoting peaceful and inclusive societies, providing access to justice for all, and building effective, accountable institutions", correct: true },
        { label: "C", text: "Reducing income inequality", correct: false },
        { label: "D", text: "Ensuring sustainable energy", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT a target of SDG 16?",
      options: [
        { label: "A", text: "Reduce all forms of violence", correct: false },
        { label: "B", text: "End corruption and bribery", correct: false },
        { label: "C", text: "Promote the rule of law at national and international levels", correct: false },
        { label: "D", text: "Develop advanced space technologies", correct: true },
      ],
    },
    {
      question: "Why is access to justice for all important for achieving SDG 16?",
      options: [
        { label: "A", text: "It helps reduce crime", correct: false },
        { label: "B", text: "It ensures that everyone can have their rights protected", correct: true },
        { label: "C", text: "It lowers the cost of governance", correct: false },
        { label: "D", text: "It promotes global trade", correct: false },
      ],
    },
  ];

  return <Quiz questions={questions} title="SDG 16 Quiz" />;
};

// const Quiz = ({ questions, title }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setShowAnswer(true);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     setSelectedOption(null);
//     setShowAnswer(false);
//   };

//   const handleResetQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setShowAnswer(false);
//   };

//   return (
//     <div>
//       <h1>{title}</h1>
//       {currentQuestionIndex < questions.length ? (
//         <div>
//           <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
//           <ul>
//             {questions[currentQuestionIndex].options.map((option, idx) => (
//               <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
//                 {option.label}. {option.text}
//               </li>
//             ))}
//           </ul>
//           {showAnswer && selectedOption && (
//             <div>
//               <p>
//                 {selectedOption.correct ? "Correct!" : "Incorrect!"}
//                 {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
//               </p>
//             </div>
//           )}
//           <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Quiz Completed!</h2>
//           <button onClick={handleResetQuiz}>Restart Quiz</button>
//         </div>
//       )}
//     </div>
//   );
// };

export const SDG17Quiz = () => {
  const questions = [
    {
      question: "What is the main objective of SDG 17?",
      options: [
        { label: "A", text: "End poverty", correct: false },
        { label: "B", text: "Build global partnerships for sustainable development", correct: true },
        { label: "C", text: "Promote renewable energy", correct: false },
        { label: "D", text: "Provide education for all", correct: false },
      ],
    },
    {
      question: "SDG 17 emphasizes strengthening partnerships at which levels?",
      options: [
        { label: "A", text: "Global", correct: false },
        { label: "B", text: "National", correct: false },
        { label: "C", text: "Local", correct: false },
        { label: "D", text: "All of the above", correct: true },
      ],
    },
    {
      question: "Which of the following areas does SDG 17 focus on to support sustainable development?",
      options: [
        { label: "A", text: "Finance, technology, and capacity-building", correct: true },
        { label: "B", text: "Military expansion", correct: false },
        { label: "C", text: "Space exploration", correct: false },
        { label: "D", text: "Wildlife conservation", correct: false },
      ],
    },
  ];

  return <Quiz questions={questions} title="SDG 17 Quiz" />;
};

const Quiz = ({ questions, title }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <li key={idx} onClick={() => handleOptionSelect(option)} className="cursor-pointer">
                {option.label}. {option.text}
              </li>
            ))}
          </ul>
          {showAnswer && selectedOption && (
            <div>
              <p>
                {selectedOption.correct ? "Correct!" : "Incorrect!"}
                {selectedOption.correct ? " This is the right answer." : ` The correct answer is ${questions[currentQuestionIndex].options.find(opt => opt.correct).label}. ${questions[currentQuestionIndex].options.find(opt => opt.correct).text}.`}
              </p>
            </div>
          )}
          <button onClick={handleNextQuestion} disabled={!showAnswer}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <button onClick={handleResetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};
