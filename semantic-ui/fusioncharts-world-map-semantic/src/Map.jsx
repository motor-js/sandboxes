import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";

import WorldWithCountries from "fusionmaps/maps/fusioncharts.worldwithcountries";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Maps, WorldWithCountries, FusionTheme);

import { useData } from "@motor-js/engine";

const PieExampleCompact = () => {
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
      qField: "[CountryID]",
      qLabel: "CountryID",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  const { data, valueKey, nameKey } = dataSet;

  const chartData =
    data &&
    data.map((p, i) => ({
      id: p[nameKey],
      value: p[valueKey],
      color: paletteColors[i],
    }));

  const dataSource = {
    chart: {
      showCanvasBorder: true,
      canvasBorderColor: "#000000",
      canvasBorderThickness: 1,
      showBorder: true,
      borderColor: "#000000",
      fillColor: "#f1f1f1",
      caption: "Wearables Revenue by Country",
      includevalueinlabels: "1",
      showHoverEffect: false,
      showEntityHoverEffect: false,
      theme: "fusion",
    },
    data: chartData,
  };

  const chartConfigs = {
    type: "worldwithcountries",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource,
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Fusioncharts World with Countries Chart</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactFC {...chartConfigs} />
      </div>
    </>
  );
};

export default PieExampleCompact;
