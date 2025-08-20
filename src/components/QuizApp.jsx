import React, { useState, useEffect } from 'react';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import quizData from '../data/questions.json';

const QuizApp = () => {
  const [screen, setScreen] = useState('start'); // 'start', 'quiz', 'result'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [maxTime, setMaxTime] = useState(30);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // Function to randomly select 10 questions from the question bank
  const getRandomQuestions = () => {
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  useEffect(() => {
    let timer;
    if (screen === 'quiz') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up for this question
            if (currentQuestionIndex < selectedQuestions.length - 1) {
              setCurrentQuestionIndex(prevIndex => prevIndex + 1);
              setTimeLeft(maxTime);
            } else {
              setScreen('result');
            }
            return maxTime;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [screen, currentQuestionIndex, maxTime, selectedQuestions.length]);

  const handleStart = (timePerQuestion) => {
    // Select 10 random questions when starting the quiz
    const randomQuestions = getRandomQuestions();
    setSelectedQuestions(randomQuestions);
    
    setMaxTime(timePerQuestion);
    setTimeLeft(timePerQuestion);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(maxTime);
    } else {
      setScreen('result');
    }
  };

  const handleRestart = () => {
    // Select new random questions when restarting
    const randomQuestions = getRandomQuestions();
    setSelectedQuestions(randomQuestions);
    
    setScreen('start');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(30);
  };

  return (
    <>
      {screen === 'start' && <StartScreen onStart={handleStart} />}
      {screen === 'quiz' && (
        <QuizScreen
          currentQuestion={{
            ...selectedQuestions[currentQuestionIndex],
            index: currentQuestionIndex,
            score: score
          }}
          onAnswer={handleAnswer}
          onNext={handleNext}
          timeLeft={timeLeft}
          maxTime={maxTime}
        />
      )}
      {screen === 'result' && (
        <ResultScreen 
          score={score} 
          total={selectedQuestions.length} 
          onRestart={handleRestart} 
          maxTime={maxTime} 
        />
      )}
    </>
  );
};

export default QuizApp;