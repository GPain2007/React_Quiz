import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../../questions.js";
import { useState } from "react";

export default function Question({ index, onSelect, onSelecthandleSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      const isCorrect = QUESTIONS[index].answers[0] === answer;
      setAnswer({
        selectedAnswer: answer,
        isCorrect,
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  // if (answer.selectedAnswer && answer.isCorrect !== null) {
  //   answerState = answer.isCorrect ? "correct" : "wrong";
  // } else if (answer.selectedAnswer) {
  //   answerState = "answered";
  // }

  if (answer.selectedAnswer) {
    if (answer.isCorrect === null) {
      answerState = "answered";
    } else {
      answerState = answer.isCorrect ? "correct" : "wrong";
    }
  }
  console.log(answerState);
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeLeft={timer}
        onTimeUp={answer.selectedAnswer == "" ? onSelecthandleSkip : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
