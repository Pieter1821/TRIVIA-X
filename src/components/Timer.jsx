import React, { useEffect, useState } from 'react';

function Timer({ timeLeft, onTimeExpired }) {
  const [remainingTime, setRemainingTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime <= 0) {
      clearInterval(timer);
      // Trigger the callback when the timer reaches zero
      if (onTimeExpired) {
        onTimeExpired();
      }
    }

    return () => clearInterval(timer);
  }, [remainingTime, onTimeExpired]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold">Time Left</h3>
      {remainingTime <= 0 ? (
        <p className="text-2xl text-red-600">Time's up!</p>
      ) : (
        <p className="text-2xl">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds} minutes
        </p>
      )}
    </div>
  );
}

export default Timer;
