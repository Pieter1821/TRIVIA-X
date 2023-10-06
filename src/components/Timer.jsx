import React, { useEffect, useState } from 'react';

function Timer({ timeLeft }) {
  const [remainingTime, setRemainingTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime <= 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [remainingTime]);

  // Convert remaining time to minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <h3 className="text-xl font-semibold">Time Left</h3>
      <p className="text-2xl">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds} minutes
      </p>
    </div>
  );
}

export default Timer;
