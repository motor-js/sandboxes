import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "World's largest cities per 2014",
    },
    subtitle: {
      text:
        'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population (millions)",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Population in 2008: <b>{point.y:.1f} millions</b>",
    },
    series: [
      {
        name: "Population",
        data: [
          ["Shanghai", 23.7],
          ["Lagos", 16.1],
          ["Istanbul", 14.2],
          ["Karachi", 14.0],
          ["Mumbai", 12.5],
          ["Moscow", 12.1],
          ["São Paulo", 11.8],
          ["Beijing", 11.7],
          ["Guangzhou", 11.1],
          ["Delhi", 11.1],
          ["Shenzhen", 10.5],
          ["Seoul", 10.4],
          ["Jakarta", 10.0],
          ["Kinshasa", 9.3],
          ["Tianjin", 9.3],
          ["Tokyo", 9.0],
          ["Cairo", 8.9],
          ["Dhaka", 8.9],
          ["Mexico City", 8.9],
          ["Lima", 8.9],
        ],
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Vertical Bar Chart</h1>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default BarExampleCompact;
