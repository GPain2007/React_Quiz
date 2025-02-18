import { useState, useEffect } from "react";

export default function QuestionTimer({ timeLeft, onTimeUp }) {
  const [remainingTime, setRemainingTime] = useState(timeLeft);
  useEffect(() => {
    setTimeout(onTimeUp, timeLeft);
  }, [onTimeUp, timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  // setInterval(() => {
  //   setRemainingTime((prevTime) => prevTime - 100);}, 100);
  return <progress id="question-time" max={timeLeft} value={remainingTime} />;
}
// Compare this snippet from src/components/Quiz.jsx
