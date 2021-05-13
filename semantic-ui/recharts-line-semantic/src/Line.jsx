import {
  LineChart,
  Line,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { useData } from "@motor-js/engine";

const LineExampleCompact = () => {
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
      // useFormatting: true,
      // qNumType: "M",
      // qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data, dataKeys } = dataSet;

  return (
    <ResponsiveContainer width="100%" height={250}>
      {data ? (
        <LineChart
          data={data}
          margin={10}
          onClick={(c) =>
            select(0, [c.activePayload[0].payload.elemNumber], false)
          }
        >
          <XAxis dataKey="Category" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          {dataKeys &&
            dataKeys.map((key, index) => (
              <Line
                // TODO replace nameKey={nameKey} from useData
                nameKey="Category"
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
              </Line>
            ))}
        </LineChart>
      ) : (
        <h1>loading</h1>
      )}
    </ResponsiveContainer>
  );
};

export default LineExampleCompact;
