import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Motor } from "@motor-js/engine";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Motor
    config={{
      //Enter your app config here..
      host: "juno-ui.eu.qlikcloud.com",
      secure: true,
      port: null,
      prefix: "",
      appId: "0294cf88-eb02-484a-b315-cf06b45ac347",
      webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
      qcs: true,
    }}
  >
    <App />
  </Motor>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
