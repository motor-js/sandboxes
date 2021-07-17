import React from "react";
import { Slider } from "react-semantic-ui-range";
import { Statistic } from "semantic-ui-react";

import { useVariable } from "@motor-js/engine";

const SliderExample = () => {
  const { value, setValue } = useVariable("statistic");
  const { value: viewValue } = useVariable("view");

  const settings = {
    start: 2,
    min: 0,
    max: 10,
    step: 1,
    onChange: (value) => {
      setValue(value);
    },
  };

  return (
    <>
      <hr />
      <div>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>{value}</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{viewValue}</Statistic.Value>
            <Statistic.Label>Views</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
      <Slider
        discrete
        color="red"
        settings={settings}
        style={{ trackFill: { backgroundColor: "#FF7272" } }}
      />
    </>
  );
};

export default SliderExample;
