import React, { useState, useEffect } from "react";

import { useTable } from "@motor-js/engine";
import { PivotViewComponent } from "@syncfusion/ej2-react-pivotview";

const PivotTableExample = () => {
  const [dataSourceSettings, setData] = useState(null);
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
      qField: "[Country]",
      dataKey: "country",
      qLabel: "Country",
    },
    {
      qField: "[Body Location]",
      dataKey: "bodyLocation",
      qLabel: "Body Location",
    },
    {
      qField: "[Source]",
      dataKey: "source",
      qLabel: "Source",
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
      qPage: { qTop: 0, qLeft: 0, qWidth: 7, qHeight: 1000 },
    });

  useEffect(() => {
    if (dataSet) {
      const dataSource =
        dataSet &&
        dataSet.map((elem) => ({
          [headerGroup[0].dataKey]: elem[headerGroup[0].dataKey].text,
          [headerGroup[1].dataKey]: elem[headerGroup[1].dataKey].text,
          [headerGroup[2].dataKey]: elem[headerGroup[2].dataKey].text,
          [headerGroup[3].dataKey]: elem[headerGroup[3].dataKey].text,
          [headerGroup[4].dataKey]: elem[headerGroup[4].dataKey].text,
          [headerGroup[5].dataKey]: elem[headerGroup[5].dataKey].number,
          [headerGroup[6].dataKey]: elem[headerGroup[6].dataKey].number,
        }));

      let dataSourceSettings = {
        enableSorting: true,
        columns: [{ name: "source" }, { name: "bodyLocation" }],
        valueSortSettings: { headerDelimiter: " - " },
        values: [
          { name: "quantity", caption: "Units Sold" },
          { name: "revenue", caption: "Sold Amount" },
        ],
        dataSource,
        rows: [{ name: "country" }, { name: "company" }],
        formatSettings: [{ name: "revenue", format: "C0" }],
        expandAll: false,
        filters: [],
      };
      setData(dataSourceSettings);
    }
  }, [dataSet]);

  return (
    <div className="control-pane">
      {dataSourceSettings && (
        <div className="control-section" style={{ overflow: "auto" }}>
          <PivotViewComponent
            id="PivotView"
            dataSourceSettings={dataSourceSettings}
            width={"100%"}
            height={"500"}
            gridSettings={{ columnWidth: 140 }}
          ></PivotViewComponent>
        </div>
      )}
    </div>
  );
};

export default PivotTableExample;
