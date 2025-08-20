import React, { useState } from 'react';
import ProgressBar from './ProgresBar.jsx';
import TimerDisplay from './TimeDisplay.jsx';

const QuizScreen = ({ currentQuestion, onAnswer, onNext, timeLeft, maxTime }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    onAnswer(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      onNext();
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="text-lg font-semibold text-gray-700">
            Q {currentQuestion.index + 1}/{10}
          </div>
          <div className="text-lg font-semibold text-blue-600">
            Score: {currentQuestion.score}
          </div>
        </div>

        <ProgressBar current={currentQuestion.index + 1} total={10} />

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Question</h2>
              <span className="inline-block mt-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {currentQuestion.category}
              </span>
            </div>
            <TimerDisplay timeLeft={timeLeft} maxTime={maxTime} />
          </div>
          
          <h3 className="text-xl text-gray-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 transform hover:scale-102 ${
                  selectedOption === index
                    ? currentQuestion.correct === index
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-500 bg-red-50 text-red-800'
                    : answered && currentQuestion.correct === index
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-xs font-semibold ${
                    selectedOption === index
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'border-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              selectedOption !== null
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next Question →
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;