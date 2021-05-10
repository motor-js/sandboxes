import AmChart4Wrapper from "react-amcharts4";

import { PieChart } from "@amcharts/amcharts4/charts";

import { useData } from "@motor-js/engine";

// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_material from "@amcharts/amcharts4/themes/material";

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

  const labels = data && data.map((c) => c.Category);
  const dataValues = data && data.map((c) => c.Revenue);
  const dataElemNumbers = data && data.map((c) => c.elemNumber);

  const chartData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: dataValues,
        backgroundColor: colors,
        borderColor: colors,
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
  };

  am4core.useTheme(am4themes_material);

  const config = {
    // Create pie series
    series: [
      {
        type: "PieSeries",
        dataFields: {
          value: "litres",
          category: "country",
        },
      },
    ],
    // Add data
    data: [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Pie Chart</h1>
      </div>
      {dataValues && (
        <AmChart4Wrapper
          config={config}
          id="amcharts-4"
          chartTypeClass={PieChart}
        />
      )}
    </>
  );
};

export default PieExampleCompact;
