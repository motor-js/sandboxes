import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";
import { qlikConfig } from "./config";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Motor config={qlikConfig}>
      <App />
    </Motor>
  </StrictMode>,
  rootElement
);
