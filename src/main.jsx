// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BrowserRouter from "./BrowserRouter.jsx"; // Import your custom BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
