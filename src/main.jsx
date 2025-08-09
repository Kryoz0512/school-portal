import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import User from "./context/User.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <User>
    <App />
   </User>
  </BrowserRouter>
 </StrictMode>
);
