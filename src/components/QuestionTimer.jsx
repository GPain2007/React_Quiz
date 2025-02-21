import { useState, useEffect } from "react";

export default function QuestionTimer({ timeLeft, onTimeUp, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeLeft);
  useEffect(() => {
    const timer = setTimeout(onTimeUp, timeLeft);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeUp, timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // setInterval(() => {
  //   setRemainingTime((prevTime) => prevTime - 100);}, 100);
  return (
    <progress
      id="question-time"
      max={timeLeft}
      value={remainingTime}
      className={mode}
    />
  );
}
// Compare this snippet from src/components/Quiz.jsx
