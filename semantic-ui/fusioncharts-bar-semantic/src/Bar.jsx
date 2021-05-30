import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

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

  const { dataSet, select } = useData({
    cols,
  });

  const { data, valueKey, nameKey } = dataSet;

  const chartData =
    data && data.map((p) => ({ label: p.Category, value: p.Revenue }));

  const dataSource = {
    chart: {
      caption: "Categories With Most Revenue [2017-18]",
      subCaption: "Data supplied by Motor",
      xAxisName: nameKey,
      yAxisName: valueKey,
      numberSuffix: "K",
      theme: "fusion",
    },
    data: chartData,
  };

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource,
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Fusioncharts Column2d Chart</h1>
      </div>
      <ReactFC {...chartConfigs} />;
    </>
  );
};

export default BarExampleCompact;
