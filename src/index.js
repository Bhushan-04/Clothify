import React from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );