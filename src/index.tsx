import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyPlant from "./components/MyPlant";
import { BrowserRouter as Router } from "react-router-dom";
// import Button from "@mui/material/Button"

// Old Code That Worked

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// New Code to Test

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<MyPlant />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
