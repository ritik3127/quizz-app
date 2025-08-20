import React from 'react';

const ResultScreen = ({ score, total, onRestart, maxTime }) => {
  const percentage = Math.round((score / total) * 100);

  let message, emoji;
  if (percentage >= 90) {
    message = "Outstanding! You're a quiz master!";
    emoji = "🏆";
  } else if (percentage >= 70) {
    message = "Great job! You know your stuff!";
    emoji = "👍";
  } else if (percentage >= 50) {
    message = "Good effort! Keep learning!";
    emoji = "📚";
  } else {
    message = "Keep practicing! You'll get better!";
    emoji = "💪";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all hover:scale-105 duration-300">
        <div className="mb-6">
          <div className={`text-6xl mb-4`}>{emoji}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 mb-4">{message}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600 mb-1">{score}/{total}</div>
            <div className="text-gray-600 text-sm">Correct Answers</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">{percentage}%</div>
            <div className="text-gray-600 text-sm">Accuracy</div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">{maxTime}s</div>
            <div className="text-gray-600 text-sm">Time per Question</div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Restart Quiz</span>
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;