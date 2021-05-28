import {
  BarChart,
  Bar,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { useData } from "@motor-js/engine";

const BarExampleCompact = () => {
  const colors = [
    "#B03060",
    "#FE9A76",
    "#FFD700",
    "#32CD32",
    "#016936",
    "#008080",
    "#0E6EB8",
    "#EE82EE",
    "#B413EC",
    "#FF1493",
    "#A52A2A",
    "#A0A0A0",
    "#000000",
  ];

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

  const { dataSet, nameKey, select } = useData({
    cols,
  });

  const { data, dataKeys } = dataSet;

  return (
    <ResponsiveContainer width="100%" height={250}>
      {data ? (
        <BarChart data={data} margin={10}>
          <XAxis dataKey={nameKey} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          {dataKeys &&
            dataKeys.map((key, index) => (
              <Bar
                nameKey={nameKey}
                key={index}
                dataKey={key}
                fill={colors[index]}
                isAnimationActive={false}
                onClick={(c) => select(0, [c.elemNumber], false)}
              >
                {dataKeys.length === 1 &&
                  data.map((entry, index) => (
                    <Cell key={index} fill={colors[index]} />
                  ))}
              </Bar>
            ))}
        </BarChart>
      ) : (
        <h1>loading</h1>
      )}
    </ResponsiveContainer>
  );
};

export default BarExampleCompact;
