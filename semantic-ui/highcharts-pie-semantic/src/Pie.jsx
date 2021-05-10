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
      type: "pie",
    },
    title: {
      text: "Revenue values by category",
    },
    subtitle: {
      text: 'built using: <a href="https://www.motor.so/">Motor</a>',
    },

    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Revenue: <b>{point.y:.1f} millions</b>",
    },
    colors,
    plotOptions: {
      series: {
        cursor: "pointer",
        events: {
          click: function (event) {
            console.log(event);
          },
        },
      },
    },
    series: [
      {
        name: "Revenue",
        data: chartData,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Highcharts Pie Chart</h1>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default BarExampleCompact;
