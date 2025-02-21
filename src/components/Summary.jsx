import QuizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../../questions.js";
import { useState, useCallback } from "react";

export default function Summary({ userAnswers, onRestart, onIndex }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const wrongAnswers = userAnswers.filter(
    (answer, index) => answer !== null && answer !== QUESTIONS[index].answers[0]
  );

  const skippedPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={QuizComplete} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="quesiton">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <div>
        <button onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
  );
}
