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
import App from "./Overlay/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
