import { Bar } from "react-chartjs-2";

import { useData } from "@motor-js/engine";

const DonutExampleCompact = () => {
  // const colors = [
  //   "#B03060",
  //   "#FE9A76",
  //   "#FFD700",
  //   "#32CD32",
  //   "#016936",
  //   "#008080",
  //   "#0E6EB8",
  //   "#EE82EE",
  //   "#B413EC",
  //   "#FF1493",
  //   "#A52A2A",
  //   "#A0A0A0",
  //   "#000000",
  // ];

  // const cols = [
  //   {
  //     qField: "[Category]",
  //     qLabel: "Category",
  //   },
  //   {
  //     qField: "=sum(Quantity * Price)",
  //     qLabel: "Revenue",
  //     qNumType: "M",
  //     qNumFmt: "£#,##0",
  //   },
  // ];

  // const { dataSet, select } = useData({
  //   cols,
  // });

  // const { data, dataKeys } = dataSet;

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
    // <ResponsiveContainer width="100%" height={250}>
    //   {data ? <Bar data={data} options={options} /> : <h1>loading</h1>}
    // </ResponsiveContainer>
    <>
      <div className="header">
        <h1 className="title">Vertical Bar Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default DonutExampleCompact;
