import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";
import { qlikConfig } from "./config";
import App from "./App";
import { NebulaConnection } from "@motor-js/nebula";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Motor config={qlikConfig}>
    <NebulaConnection>
      <App />
    </NebulaConnection>
  </Motor>,
  rootElement
);
