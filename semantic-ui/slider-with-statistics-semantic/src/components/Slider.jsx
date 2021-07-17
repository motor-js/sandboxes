import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label } from "semantic-ui-react";

import { useVariable } from "@motor-js/engine";

const start = [2, 5];
const name = "testVar66";

const SliderExample = () => {
  const { value, setValue } = useVariable({
    name,
    definition: start,
  });

  const [multipleValues, setMultipleValues] = useState(start);
  const settings = {
    start,
    min: 0,
    max: 25,
    step: 1,
    onChange: (value) => {
      setMultipleValues(value);
      setValue(value);
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
