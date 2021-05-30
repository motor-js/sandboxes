import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useTable } from "@motor-js/engine";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridExampleComponent = () => {
  const cols = [
    {
      qField: "[Country]",
      dataKey: "country",
      qLabel: "Country",
    },
    {
      qField: "[Company Name]",
      dataKey: "company",
      qLabel: "Company Name",
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
      cols,
      qPage: { qTop: 0, qLeft: 0, qWidth: 5, qHeight: 100 },
    });

  const handleSelect = (c, i) => {
    select(c.columnId, [c.elemNumber], false);
  };

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const rowData =
    dataSet &&
    dataSet.map((d, i) => {
      const item = {};
      headerGroup.map((h, j) => {
        item[h.dataKey] =
          d[h.dataKey].number === "NaN"
            ? d[h.dataKey].text
            : d[h.dataKey].number;
      });

      return item;
    });

  return (
    <div style={{ padding: "10px" }}>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        {dataSet && (
          <AgGridReact
            rowData={rowData} // events
            onGridReady={onGridReady}
            pivotMode={true}
            defaultColDef={{
              flex: 1,
              minWidth: 150,
              sortable: true,
              resizable: true,
            }}
            autoGroupColumnDef={{ minWidth: 250 }}
          >
            <AgGridColumn
              headerName="Country"
              field="country"
              rowGroup={true}
              enableRowGroup={true}
            ></AgGridColumn>
            <AgGridColumn
              headerName="Company Name"
              field="company"
              pivot={true}
            ></AgGridColumn>
            <AgGridColumn
              // headerName="Quantity Sold"
              field="quantity"
              aggFunc="sum"
            ></AgGridColumn>
            {/* <AgGridColumn
              headerName="Revenue"
              field="revenue"
              aggFunc="sum"
            ></AgGridColumn> */}
          </AgGridReact>
        )}
      </div>
    </div>
  );
};

export default GridExampleComponent;
