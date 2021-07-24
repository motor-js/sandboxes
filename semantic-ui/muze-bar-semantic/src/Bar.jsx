import React, { useEffect, useState } from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";

import { useData } from "@motor-js/engine";

const BarExampleCompact = () => {
  const [chartData, setChartData] = useState(null);
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

  // const { data } = dataSet;

  const dataSource =
    data &&
    data.map((c) => {
      return { x: c[nameKey], y: c[valueKey], elemNumber: c.elemNumber };
    });

  const data = [
    {
      Name: "chevrolet chevelle malibu",
      Acceleration: 12,
    },
    {
      Name: "buick skylark 320",
      Acceleration: 11.5,
    },
    {
      Name: "plymouth satellite",
      Acceleration: 11,
    },
    {
      Name: "amc rebel sst",
      Acceleration: 12,
    },
  ];
  const schema = [
    {
      name: "Name",
      type: "dimension",
    },
    {
      name: "Acceleration",
      type: "measure",
      defAggFn: "avg",
    },
  ];

  async function createDataModel() {
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    setChartData(new DataModelClass(formattedData));
  }

  // Load data into chart
  useEffect(() => {
    createDataModel();

    return () => setChartData();
  }, []);

  return (
    <div className="app">
      {chartData && (
        <Muze data={chartData}>
          <Canvas rows={["Acceleration"]} columns={["Name"]} />
        </Muze>
      )}
    </div>
  );
};

export default BarExampleCompact;
