import React, { useRef, useLayoutEffect } from "react";

import { useData } from "@motor-js/engine";

// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

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

  const { data } = dataSet;

  const chart = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    let x = am4core.create("chartdiv", am4charts.PieChart);

    // data && data.map((element, index) => (element.Colors = colors[index]));

    // Add data
    x.data = data;

    // Add and configure Series
    let pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Revenue";
    pieSeries.dataFields.category = "Category";
    pieSeries.slices.template.propertyFields.fill = "Colors";
    pieSeries.slices.template.propertyFields.elemNumber = "elemNumber";

    pieSeries.slices.template.events.on(
      "hit",
      function (ev) {
        select(0, [ev.target.elemNumber], false);
      },
      this
    );

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  // Load data into chart
  React.useEffect(() => {
    if (chart.current) {
      data && data.map((element, index) => (element.Colors = colors[index]));
      chart.current.data = data;
    }
  }, [data]);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default PieExampleCompact;
