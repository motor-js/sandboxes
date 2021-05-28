import { VictoryPie } from "victory";

import { useData } from "@motor-js/engine";

const PieExampleCompact = () => {
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

  const { data, nameKey, valueKey } = dataSet;

  const dataSource =
    data &&
    data.map((c) => {
      return { x: c[nameKey], y: c[valueKey], elemNumber: c.elemNumber };
    });

  return (
    <>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {dataSource && (
            <VictoryPie
              data={dataSource}
              colorScale={colors}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            if (props.datum) {
                              select(0, [props.datum.elemNumber], false);
                            }
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PieExampleCompact;
