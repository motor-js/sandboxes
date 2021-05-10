import {
  AreaChart,
  Area,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { useData } from "@motor-js/engine";

const AreaExampleCompact = () => {
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
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data, dataKeys } = dataSet;

  const handleSelect = (c, i) => {
    const points = c.points;
    let elemNumber = null;
    points.map((p) => {
      if (p.x < i.pageX) elemNumber = p.payload.elemNumber;
    });
    select(0, [elemNumber], false);
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      {data ? (
        <AreaChart data={data} margin={10}>
          <XAxis dataKey="Category" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          {dataKeys &&
            dataKeys.map((key, index) => (
              <Area
                // TODO replace nameKey={nameKey} from useData
                nameKey="Category"
                key={index}
                dataKey={key}
                fill={colors[index]}
                isAnimationActive={false}
                onClick={handleSelect}
              >
                {dataKeys.length === 1 &&
                  data.map((entry, index) => (
                    <Cell key={index} fill={colors[index]} />
                  ))}
              </Area>
            ))}
        </AreaChart>
      ) : (
        <h1>loading</h1>
      )}
    </ResponsiveContainer>
  );
};

export default AreaExampleCompact;
