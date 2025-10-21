import { useState, useCallback } from "react";

function useCounter(initialValue: number) {
  const [count, setCount] = useState<number>(initialValue);

  return {
    count: count,
    increment: useCallback(() => setCount((prev) => (prev += 1)), []),
    decrement: useCallback(() => setCount((prev) => (prev -= 1)), []),
    reset: useCallback(() => setCount(0), []),
    setCount,
  };
}

export default function Component() {
  const { count, increment, decrement, reset, setCount } = useCounter(5);
  const [inputValue, setInputValue] = useState<number>();

  const onKeyDown = (event) => {
    if (!(event.key === "Enter")) return;
    setCount(parseFloat(event.target.value));
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        value={isNaN(inputValue) ? "" : inputValue}
        type="number"
        onChange={(event) => setInputValue(parseFloat(event.target.value))}
        onKeyDown={(event) => onKeyDown(event)}
        onBlur={() => setCount(inputValue)}
      />
    </div>
  );
}
