import { useState, useRef } from "react";

const questions = [
  { question: "fav animal", answer: "tiger" },
  { question: "fav country", answer: "brasil" },
  { question: "fav city", answer: "london" },
];

export const Quiz = () => {
  const score = useRef(null);
  const [inputState, setInputState] = useState(null);

  const [questionNumber, setQuestionNumber] = useState(0);

  const handleInputState = (event) => {
    if (event.key !== "Enter") return;
    event.target.value === questions[questionNumber].answer
      ? setQuestionNumber((prev) => prev + 1)
      : console.log(false);
  };

  const question = questions[questionNumber].question;

  return (
    <>
      <div>
        {question}
        <label htmlFor="questionInput"></label>
        <input
          id="questionInput"
          value={inputState}
          onKeyDown={(event) => handleInputState(event)}
        />
      </div>
    </>
  );
};
