import React, { useState, useEffect } from "react";

import { useTable } from "@motor-js/engine";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";

const PivotTableExample = () => {
  const [setting, setSetting] = useState(null);
  const [data, setData] = useState(null);
  const columns = [
    {
      qField: "[Company Name]",
      dataKey: "company",
      qLabel: "Company Name",
    },
    {
      qField: "[Category]",
      dataKey: "category",
      qLabel: "Category",
    },
    {
      qField: "=sum(Quantity)",
      dataKey: "quantity",
      qLabel: "Quantity Sold",
    },
    {
      qField: "=sum(Quantity * Price)",
      dataKey: "revenue",
      qLabel: "Revenue",
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, headerGroup, select, incrementPage, decrementPage } =
    useTable({
      cols: columns,
      qPage: { qTop: 0, qLeft: 0, qWidth: 5, qHeight: 100 },
    });

  const cols = ["category"];
  const rows = ["company"];
  const vals = ["quantity", "revenue"];

  useEffect(() => {
    const data =
      dataSet &&
      dataSet.map((elem) => ({
        [headerGroup[0].dataKey]: elem[headerGroup[0].dataKey].text,
        [headerGroup[1].dataKey]: elem[headerGroup[1].dataKey].text,
        [headerGroup[2].dataKey]: elem[headerGroup[2].dataKey].number,
        [headerGroup[3].dataKey]: elem[headerGroup[3].dataKey].number,
      }));
    setData(data);
  }, [dataSet]);

  return (
    <div>
      {data && (
        <PivotTableUI
          data={data}
          cols={cols}
          rows={rows}
          vals={vals}
          aggregatorName={"Sum"}
          onChange={(s) => setSetting(s)}
          {...setting}
        />
      )}
    </div>
  );
};

export default PivotTableExample;
