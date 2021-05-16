import { VictoryLabel, VictoryAxis, VictoryLine } from "victory";

import { useData } from "@motor-js/engine";

const CustomChartExampleComponent = () => {
  const cols = [
    {
      qField: "[OrderDate]",
      qLabel: "OrderDate",
    },
    {
      qField: "=sum(Quantity * Price)/1000",
      qLabel: "Revenue",
    },
    {
      qField: "=sum(Quantity)",
      qLabel: "Quantities",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  // const tickValues = data && data.map((c) => new Date(c.OrderDate));
  const tickValues =
    data &&
    data.map((c) => {
      const date = new Date(c.OrderDate);
      return new Date(date.getFullYear(), date.getMonth());
    });
  const startDate = Math.min.apply(Math, tickValues);
  const endDate = Math.max.apply(Math, tickValues);

  const dataSetOneValues = data && data.map((c) => c.Revenue);
  const dataSetOneValuesMin = data && Math.min.apply(Math, dataSetOneValues);
  const dataSetOneValuesMax = data && Math.max.apply(Math, dataSetOneValues);

  const dataSetOne =
    data &&
    data.map((c) => {
      return { x: new Date(c.OrderDate), y: c.Revenue };
    });

  const dataSetTwoValues = data && data.map((c) => c.Quantities);
  const dataSetTwoValuesMin = data && Math.min.apply(Math, dataSetTwoValues);
  const dataSetTwoValuesMax = data && Math.max.apply(Math, dataSetTwoValues);

  const dataSetTwo =
    data &&
    data.map((c) => {
      return { x: new Date(c.OrderDate), y: c.Quantities };
    });

  const getStyles = () => {
    {
      const BLUE_COLOR = "#00a3de";
      const RED_COLOR = "#7c270b";

      return {
        parent: {
          background: "#ccdee8",
          boxSizing: "border-box",
          display: "inline",
          padding: 0,
          fontFamily: "'Fira Sans', sans-serif",
        },
        title: {
          textAnchor: "start",
          verticalAnchor: "end",
          fill: "#000000",
          fontFamily: "inherit",
          fontSize: "18px",
          fontWeight: "bold",
        },
        labelNumber: {
          textAnchor: "middle",
          fill: "#ffffff",
          fontFamily: "inherit",
          fontSize: "14px",
        },

        // INDEPENDENT AXIS
        axisYears: {
          axis: { stroke: "black", strokeWidth: 1 },
          ticks: {
            // size: ({ tick }) => {
            //   const tickSize = tick.getFullYear() % 5 === 0 ? 10 : 5;
            //   return tickSize;
            // },
            size: 10,
            stroke: "black",
            strokeWidth: 1,
          },
          tickLabels: {
            fill: "black",
            fontFamily: "inherit",
            fontSize: 16,
          },
        },

        // DATA SET ONE
        axisOne: {
          grid: {
            stroke: ({ tick }) => (tick === -10 ? "transparent" : "#ffffff"),
            strokeWidth: 2,
          },
          axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
          ticks: { strokeWidth: 0 },
          tickLabels: {
            fill: BLUE_COLOR,
            fontFamily: "inherit",
            fontSize: 16,
          },
        },
        labelOne: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontSize: 12,
          fontStyle: "italic",
        },
        lineOne: {
          data: { stroke: BLUE_COLOR, strokeWidth: 0.5 },
        },
        axisOneCustomLabel: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontWeight: 300,
          fontSize: 21,
        },

        // DATA SET TWO
        axisTwo: {
          axis: { stroke: RED_COLOR, strokeWidth: 0 },
          tickLabels: {
            fill: RED_COLOR,
            fontFamily: "inherit",
            fontSize: 16,
          },
        },
        labelTwo: {
          textAnchor: "end",
          fill: RED_COLOR,
          fontFamily: "inherit",
          fontSize: 12,
          fontStyle: "italic",
        },
        lineTwo: {
          data: { stroke: RED_COLOR, strokeWidth: 0.5 },
        },

        // HORIZONTAL LINE
        lineThree: {
          data: { stroke: "#e95f46", strokeWidth: 2 },
        },
      };
    }
  };

  const styles = getStyles();

  return (
    <>
      {/* <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div> */}

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >*/}
      <div>
        {data && (
          <svg style={styles.parent} viewBox="0 0 450 350">
            {/* Create stylistic elements */}
            <rect x="0" y="0" width="10" height="30" fill="#f01616" />
            <rect x="420" y="10" width="20" height="20" fill="#458ca8" />

            {/* Define labels */}
            <VictoryLabel
              x={25}
              y={24}
              style={styles.title}
              text="An outlook"
            />
            <VictoryLabel x={430} y={20} style={styles.labelNumber} text="1" />
            <VictoryLabel
              x={25}
              y={55}
              style={styles.labelOne}
              text={"Economy \n % change on a year earlier"}
            />
            <VictoryLabel
              x={425}
              y={55}
              style={styles.labelTwo}
              text={"Dinosaur exports\n $bn"}
            />

            <g transform={"translate(0, 40)"}>
              {/* Add shared independent axis */}
              <VictoryAxis
                scale="time"
                standalone={false}
                style={styles.axisYears}
                tickValues={tickValues}
                tickFormat={(x) => {
                  if (x.getMonth() % 3 === 0) {
                    return (
                      x.toLocaleString("default", { month: "short" }) +
                      "-" +
                      x.getFullYear().toString().slice(2)
                    );
                  }
                }}
              />

              {/*
            Add the dependent axis for the first data set.
            Note that all components plotted against this axis will have the same y domain
          */}
              <VictoryAxis
                dependentAxis
                domain={[dataSetOneValuesMin, dataSetOneValuesMax]}
                offsetX={50}
                orientation="left"
                standalone={false}
                style={styles.axisOne}
              />

              {/* Red annotation line */}
              <VictoryLine
                data={[
                  { x: startDate, y: 20 },
                  { x: endDate, y: 20 },
                ]}
                domain={{
                  x: [startDate, endDate],
                  y: [dataSetOneValuesMin, dataSetOneValuesMax],
                }}
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                style={styles.lineThree}
              />

              {/* dataset one */}
              <VictoryLine
                data={dataSetOne}
                domain={{
                  x: [startDate, endDate],
                  y: [dataSetOneValuesMin, dataSetOneValuesMax],
                }}
                interpolation="monotoneX"
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                style={styles.lineOne}
              />

              {/*
            Add the dependent axis for the second data set.
            Note that all components plotted against this axis will have the same y domain
          */}
              <VictoryAxis
                dependentAxis
                // domain={[0, 50]}
                domain={[dataSetTwoValuesMin, dataSetTwoValuesMax]}
                orientation="right"
                standalone={false}
                style={styles.axisTwo}
              />

              {/* dataset two */}
              <VictoryLine
                data={dataSetTwo}
                domain={{
                  x: [startDate, endDate],
                  y: [dataSetTwoValuesMin, dataSetTwoValuesMax],
                }}
                interpolation="monotoneX"
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                style={styles.lineTwo}
              />
            </g>
          </svg>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default CustomChartExampleComponent;
