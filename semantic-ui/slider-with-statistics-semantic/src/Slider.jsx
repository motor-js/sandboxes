import React, { useState, useEffect } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label } from "semantic-ui-react";

import { useVariable } from "@motor-js/engine";

const SliderExample = () => {
  const { value, setProperties } = useVariable({
    qName: "newVar2",
    qDefinition: "3,5",
  });

  const [multipleValues, setMultipleValues] = useState([2, 12]);
  const settings = {
    start: [2, 12],
    min: 0,
    max: 25,
    step: 1,
    onChange: (value) => {
      setMultipleValues(value);
      setProperties({ qId: "test123", qDefinition: value.toString() });
    },
  };

  return (
    <>
      <Slider multiple color="red" settings={settings} />
      {multipleValues.map((val, i) => (
        <Label key={i} color="red">
          {val}
        </Label>
      ))}
      <Label color="red">{value}</Label>
    </>
  );
};

export default SliderExample;
