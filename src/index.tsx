import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Likes_Button/App";
// import App from "./useHoverHook/App";
// import App from "./useFocusHook/App";
// import App from "./Noughts_Crosses/App";
// import App from "./Data_Fetching/App";
// import App from "./Todo/App";
// import App from "./Form/App";
// import App from "./Overlay/App";
// import { App } from "./Accordion/App";
import { Quiz } from "./Quiz";
// import { App } from "./Search";
// import { App } from "./ArtExperiment";
import { StopWatch } from "./Stopwatch";
import Component from "./GreatFrontEnd/useCounter";
// import { App } from "./RaceCondition/index";
// import { WebsocketApp } from "./websocket/App";
import { App } from "./DataTable/DataTable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <StopWatch /> */}
    {/* <Component /> */}
    {/* <WebsocketApp /> */}
    <App />
  </React.StrictMode>
);
