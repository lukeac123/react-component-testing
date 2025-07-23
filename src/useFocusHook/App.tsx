import { useState, useCallback, useRef, RefCallback } from "react";

function useFocus() {
  const [isFocused, setFocus] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(() => setFocus(true), []);
  const handleBlur = useCallback(() => setFocus(true), []);

  const callBackRef: RefCallback<HTMLInputElement> = useCallback(
    (node: HTMLInputElement) => {
      if (ref.current) {
        ref.current.removeEventListener("focus", handleFocus);
        ref.current.removeEventListener("blur", () => handleBlur);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("focus", () => handleFocus);
        ref.current.addEventListener("blur", () => handleBlur);
      }
    },
    []
  );

  return [callBackRef, isFocused];
}

export default function App() {
  const [ref, isFocused] = useFocus();
  return (
    <div>
      {/* @ts-ignore */}
      <input ref={ref} />
      {isFocused && <p>focused</p>}
    </div>
  );
}
