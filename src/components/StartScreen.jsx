import React, { useState } from 'react';

// Import the quiz data
import quizData from '../data/questions.json';


const StartScreen = ({ onStart }) => {
  const [selectedTime, setSelectedTime] = useState(30);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all hover:scale-105 duration-300">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1m-4.364 5.364l-.707-.707M12 19v1m-1-10h.01M12 13h.01M12 17h.01M6.364 16.364l-.707-.707M3 12h1m4.364-5.364l.707-.707" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Challenge</h1>
          <p className="text-gray-600">Test your knowledge with our 10-question quiz!</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-3">Settings:</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time per question:</label>
              <select 
                value={selectedTime} 
                onChange={(e) => setSelectedTime(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={15}>15 seconds</option>
                <option value={20}>20 seconds</option>
                <option value={25}>25 seconds</option>
                <option value={30}>30 seconds</option>
                <option value={45}>45 seconds</option>
                <option value={60}>60 seconds</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-2">Rules:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 10 randomly selected questions from a bank of {quizData.length} questions</li>
            <li>• 1 point per correct answer</li>
            <li>• No going back</li>
            <li>• Timer: {selectedTime} seconds per question</li>
            <li>• New questions every time you restart!</li>
          </ul>
        </div>
        
        <button
          onClick={() => onStart(selectedTime)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;