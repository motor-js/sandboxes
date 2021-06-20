import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

import { useData } from "@motor-js/engine";

const LineExampleCompact = () => {
  const paletteColors = [
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
      qField: "[TransID]",
      qLabel: "TransID",
    },
    {
      qField: '=Count({$<TransID={"<=20000"}>} TransID)',
      qLabel: "Revenue",
    },
  ];

  const qPage = {
    qTop: 0,
    qLeft: 0,
    qWidth: 2,
    qHeight: 5000,
  };

  const { dataSet, select } = useData({
    cols,
    qPage,
  });

  const { data, valueKey, nameKey } = dataSet;

  const chartData =
    data &&
    data.map((p) => ({
      label: p[nameKey],
      value: p[valueKey],
    }));

  const dataSource = {
    chart: {
      caption: "Categories With Most Revenue [2017-18]",
      subCaption: "Data supplied by Motor",
      xAxisName: nameKey,
      yAxisName: valueKey,
      numberSuffix: "K",
      theme: "fusion",
      paletteColors,
    },
    data: chartData,
  };

  const chartConfigs = {
    type: "line",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource,
  };

  // Event listener for dataplotclick event on chart. Update message with data plot values.
  const dataPlotClick = (eventObj, dataObj) => {
    if (data && data[dataObj.dataIndex])
      select(0, [data[dataObj.dataIndex].elemNumber], false);
  };

  FusionCharts.addEventListener("dataplotClick", dataPlotClick);

  return (
    <>
      <div className="header">
        <h1 className="title">Fusioncharts Line Chart</h1>
      </div>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default LineExampleCompact;
