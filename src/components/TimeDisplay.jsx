const TimerDisplay = ({ timeLeft, maxTime }) => {
  const percentage = (timeLeft / maxTime) * 100;
  const isCritical = timeLeft <= 10;
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
            strokeDasharray="100, 100"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={isCritical ? "#ef4444" : "#3b82f6"}
            strokeWidth="2"
            strokeDasharray={`${percentage}, 100`}
            className="transition-all duration-100 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-bold ${isCritical ? 'text-red-600' : 'text-gray-700'}`}>
            {timeLeft}
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-600 font-medium">seconds left</span>
    </div>
  );
};

export default TimerDisplay;