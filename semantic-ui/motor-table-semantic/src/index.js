import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Motor } from '@motor-js/engine'
import { qlikConfig } from './config'
import App from "./App";
import 'semantic-ui-css/semantic.min.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Motor config={qlikConfig}>
      <App />
    </Motor>
  </StrictMode>,
  rootElement
);

/*
    host: "pe.qlik.com",
    secure: true,
    port: 443,
    prefix: null,
    appId: "ebb09247-0aa9-4b8f-8a2b-0454eea6eeee
*/