import { useState } from "react";
import { OverlayContext, useOverlayContext } from "./OverlayContext";
import { clsx } from "clsx";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const id = "overlayId";

  return (
    <div className="app">
      <Overlay open={open} setOpen={setOpen} id={id} position="top">
        <OverlayTrigger>Overlay Trigger</OverlayTrigger>
        <OverlayPanel>
          <h3>Overlay Panel Header</h3>
          <text>Overlay Body Content</text>
        </OverlayPanel>
      </Overlay>
    </div>
  );
};

export default App;

const Overlay = ({ children, open, setOpen, id = "Overlay", position }) => {
  return (
    <OverlayContext.Provider value={{ open, setOpen, position, id }}>
      <div className="overlay">{children}</div>
    </OverlayContext.Provider>
  );
};

const OverlayTrigger = ({ children }) => {
  const { setOpen, id, open } = useOverlayContext();

  return (
    <button
      aria-expanded={open}
      aria-controls={id}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

const OverlayPanel = ({ children }) => {
  const { open, setOpen, id, position } = useOverlayContext();
  return (
    open && (
      <div
        id={id}
        aria-modal
        aria-expanded={open}
        className={clsx("overlayPanel", `overlayPosition-${position}`)}
      >
        {children}
        <button
          aria-label="overlayCloseButton"
          className="overlayCloseButton"
          onClick={() => setOpen(false)}
        >
          X
        </button>
      </div>
    )
  );
};
