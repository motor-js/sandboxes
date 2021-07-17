import React from "react";

import Slider from "./components/Slider";
import Statistic from "./components/Statistic";

export default function App() {
  return (
    <div className="App" style={{ padding: "10px" }}>
      <Slider />
      <Statistic />
    </div>
  );
}
