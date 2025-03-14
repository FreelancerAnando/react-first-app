import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1> hello react app</h1>;
}

// React V18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
