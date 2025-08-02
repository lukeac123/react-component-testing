import { useState, useRef } from "react";
import "./App.css";

const winningCombs = [
  [0, 1, 2],
  [1, 4, 7],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [0, 4, 8],
  [6, 4, 2],
];

function checkWin(values): boolean {
  const player1 = [];
  const player2 = [];
  let gameOver = false;

  values.forEach((value, index) => {
    if (value === "X") player1.push(index);
    if (value === "O") player2.push(index);
  });
  if (player1.length < 2 || player2.length < 2) return;

  // Look into this logic
  if (
    winningCombs.some((comb) => comb.every((value) => player1.includes(value)))
  )
    gameOver = true;

  console.log(player2);

  if (
    winningCombs.some((comb) => comb.every((value) => player2.includes(value)))
  )
    gameOver = true;

  return gameOver;
}

export default function App() {
  const countRef = useRef(0);
  const [values, setValues] = useState(Array(9).fill("Click Me"));
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    const newValues = [...values];
    countRef.current % 2 !== 0
      ? (newValues[index] = "O")
      : (newValues[index] = "X");
    checkWin(newValues) && setGameOver(true);

    countRef.current++;
    setValues(newValues);
  };

  const handleReset = () => {
    setValues(Array(9).fill("Click Me"));
    setGameOver(false);
    countRef.current = 0;
  };

  return (
    <div className="boardContainer">
      {values.map((value, index) => {
        return (
          <button
            disabled={gameOver && true}
            className="boardButton"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        );
      })}
      <button onClick={handleReset}>reset</button>
      <div>{gameOver && "GameOver"}</div>
    </div>
  );
}
