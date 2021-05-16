import { VictoryLabel, VictoryAxis, VictoryLine } from "victory";

import { useData } from "@motor-js/engine";

const CustomChartExampleComponent = () => {
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
      useFormatting: true,
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  const dataSource =
    data &&
    data.map((c) => {
      return { x: c.Category, y: c.Revenue, elemNumber: c.elemNumber };
    });

  const tickValues = [
    new Date(1999, 1, 1),
    new Date(2000, 1, 1),
    new Date(2001, 1, 1),
    new Date(2002, 1, 1),
    new Date(2003, 1, 1),
    new Date(2004, 1, 1),
    new Date(2005, 1, 1),
    new Date(2006, 1, 1),
    new Date(2007, 1, 1),
    new Date(2008, 1, 1),
    new Date(2009, 1, 1),
    new Date(2010, 1, 1),
    new Date(2011, 1, 1),
    new Date(2012, 1, 1),
    new Date(2013, 1, 1),
    new Date(2014, 1, 1),
    new Date(2015, 1, 1),
    new Date(2016, 1, 1),
  ];

  const dataSetOne = [
    { x: new Date(2000, 1, 1), y: 12 },
    { x: new Date(2000, 6, 1), y: 10 },
    { x: new Date(2000, 12, 1), y: 11 },
    { x: new Date(2001, 1, 1), y: 5 },
    { x: new Date(2002, 1, 1), y: 4 },
    { x: new Date(2003, 1, 1), y: 6 },
    { x: new Date(2004, 1, 1), y: 5 },
    { x: new Date(2005, 1, 1), y: 7 },
    { x: new Date(2006, 1, 1), y: 8 },
    { x: new Date(2007, 1, 1), y: 9 },
    { x: new Date(2008, 1, 1), y: -8.5 },
    { x: new Date(2009, 1, 1), y: -9 },
    { x: new Date(2010, 1, 1), y: 5 },
    { x: new Date(2013, 1, 1), y: 1 },
    { x: new Date(2014, 1, 1), y: 2 },
    { x: new Date(2015, 1, 1), y: -5 },
  ];

  const dataSetTwo = [
    { x: new Date(2000, 1, 1), y: 5 },
    { x: new Date(2003, 1, 1), y: 6 },
    { x: new Date(2004, 1, 1), y: 4 },
    { x: new Date(2005, 1, 1), y: 10 },
    { x: new Date(2006, 1, 1), y: 12 },
    { x: new Date(2007, 2, 1), y: 48 },
    { x: new Date(2008, 1, 1), y: 19 },
    { x: new Date(2009, 1, 1), y: 31 },
    { x: new Date(2011, 1, 1), y: 49 },
    { x: new Date(2014, 1, 1), y: 40 },
    { x: new Date(2015, 1, 1), y: 21 },
  ];

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
            size: ({ tick }) => {
              const tickSize = tick.getFullYear() % 5 === 0 ? 10 : 5;
              return tickSize;
            },
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
          data: { stroke: BLUE_COLOR, strokeWidth: 4.5 },
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
          data: { stroke: RED_COLOR, strokeWidth: 4.5 },
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
        {dataSource && (
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
                  if (x.getFullYear() === 2000) {
                    return x.getFullYear();
                  }
                  if (x.getFullYear() % 5 === 0) {
                    return x.getFullYear().toString().slice(2);
                  }
                }}
              />

              {/*
            Add the dependent axis for the first data set.
            Note that all components plotted against this axis will have the same y domain
          */}
              <VictoryAxis
                dependentAxis
                domain={[-10, 15]}
                offsetX={50}
                orientation="left"
                standalone={false}
                style={styles.axisOne}
              />

              {/* Red annotation line */}
              <VictoryLine
                data={[
                  { x: new Date(1999, 1, 1), y: 0 },
                  { x: new Date(2014, 6, 1), y: 0 },
                ]}
                domain={{
                  x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                  y: [-10, 15],
                }}
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                style={styles.lineThree}
              />

              {/* dataset one */}
              <VictoryLine
                data={dataSetOne}
                domain={{
                  x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                  y: [-10, 15],
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
                domain={[0, 50]}
                orientation="right"
                standalone={false}
                style={styles.axisTwo}
              />

              {/* dataset two */}
              <VictoryLine
                data={dataSetTwo}
                domain={{
                  x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
                  y: [0, 50],
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
