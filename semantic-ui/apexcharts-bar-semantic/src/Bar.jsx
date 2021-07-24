import React, { useRef, useEffect } from "react";
import Chart from "react-apexcharts";

import { useData } from "@motor-js/engine";

const BarExampleCompact = () => {
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

  const { dataSet } = useData({
    cols,
  });

  const { data } = dataSet;

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,

      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: data
        ? data.map((n) => (n && n["Category"]) || "untitled")
        : [],

      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: data ? data.map((n) => n && parseInt(n["Revenue"])) : [],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && (
            <Chart options={options} series={series} type="bar" width="100%" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BarExampleCompact;
