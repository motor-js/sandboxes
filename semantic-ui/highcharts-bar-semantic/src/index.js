import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";
import { qlikConfig } from "./config";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Motor config={qlikConfig}>
    <App />
  </Motor>,
  rootElement
);
