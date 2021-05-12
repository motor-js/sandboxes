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

  const chartData = data && data.map((p) => [p.Category, p.Revenue]);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Revenue values by Category",
    },
    subtitle: {
      text: 'built using: <a href="https://www.motor.so/">Motor</a>',
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
        text: "Revenue (millions)",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Revenue in 2008: <b>{point.y:.1f} millions</b>",
    },
    colors,
    plotOptions: {
      series: {
        cursor: "pointer",
        events: {
          click: function (event) {
            const element = data.filter((e) => e.label === event.point.name);
            select(0, [element[0].elemNumber], false);
          },
        },
      },
    },

    series: [
      {
        name: "Revenue",
        colorByPoint: true,
        data: chartData,
        colors,
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
