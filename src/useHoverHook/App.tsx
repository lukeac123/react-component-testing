import { useState, useCallback, useRef } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const callBackRef: React.RefCallback<HTMLElement> = useCallback(
    (node: HTMLDivElement) => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", () => setIsHovered(true));
        ref.current.removeEventListener("mouseout", () => setIsHovered(false));
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mouseover", () => setIsHovered(true));
        ref.current.addEventListener("mouseout", () => setIsHovered(false));
      }
    },
    []
  );

  return [callBackRef, isHovered];
}

export default function App() {
  const [ref, isHovered] = useHover();
  return (
    /* @ts-ignore */
    <div ref={ref}>{isHovered ? "hovered" : "not hovered"}</div>
  );
}
