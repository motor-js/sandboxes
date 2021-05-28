import { Line } from "react-chartjs-2";

import { useData } from "@motor-js/engine";

const LineExampleCompact = () => {
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
      qField: "[OrderDate]",
      qLabel: "OrderDate",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  const labels = data && data.map((c) => c.OrderDate);
  const dataValues = data && data.map((c) => c.Revenue);
  const dataElemNumbers = data && data.map((c) => c.elemNumber);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue by Order Date",
        data: dataValues,
        backgroundColor: colors[0],
        borderColor: colors[0],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    onClick: function (evt, element) {
      if (element.length > 0) {
        select(0, [dataElemNumbers[element[0].index]], false);
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
      </div>
      <Line data={chartData} options={options} />
    </>
  );
};

export default LineExampleCompact;
