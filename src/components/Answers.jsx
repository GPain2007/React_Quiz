import { useRef } from "react";

export default function Answers({
  answers,
  seletedAnswer,
  answerState,
  onSelect,
}) {
  // const shuffledAnswers = useRef();
  // shuffledAnswers.current = [...answers];
  // shuffledAnswers.current.sort(() => Math.random() - 0.5);
  const shuffledAnswers = useRef([...answers].sort(() => Math.random() - 0.5));
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = seletedAnswer === answer;

        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        console.log(cssClasses);
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={answerState}
              disabled={answerState && !isSelected}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
