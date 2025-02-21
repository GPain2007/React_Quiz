import { useState, useCallback } from "react";
import QUESTIONS from "../../questions.js";

import Question from "./Question";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  const activeQuestionIndex = userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkip = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  function handleRestart() {
    window.location.href = window.location.href;
  }

  if (quizCompleted) {
    return <Summary userAnswers={userAnswers} onRestart={handleRestart} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onSelecthandleSkip={handleSkip}
        onIndex={index}
      />
    </div>
  );
}
