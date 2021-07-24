import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import { useData } from "@motor-js/engine";

const BarExampleCompact = () => {
  const cols = [
    {
      qField: "[Category]",
      qLabel: "Category",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  const { data, nameKey, valueKey } = dataSet;

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const chartData =
    data && data.map((p) => ({ Category: p[nameKey], Revenue: p[valueKey] }));

  return (
    <div style={styles}>
      <h1>Nivo basic demo</h1>
      <div style={{ height: "400px" }}>
        {chartData && (
          <ResponsiveBar
            data={chartData}
            keys={["Revenue"]}
            indexBy="Category"
          />
        )}
      </div>
    </div>
  );
};

export default BarExampleCompact;
