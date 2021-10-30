import { useData } from "@motor-js/engine";
import { KPI, Col, Row } from "../kpi";
import { StyledContainer, StyledContent } from "./style";

const Container = ({ className, ...props }) => {
  return <StyledContainer className={className} {...props} />;
};

const Content = ({ children, className, fullHeight, align, ...restProps }) => {
  return (
    <StyledContent
      $fullHeight={fullHeight}
      $align={align}
      className={className}
      {...restProps}
    >
      <Container className="container" pl="0" pr="0">
        {children}
      </Container>
    </StyledContent>
  );
};

const RowOne = () => {
  const qMetrics = [
    {
      qName: "TOTAL SALES",
      qExpr: "num(Sum(today),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "uniquePurchase",
      // qExpr: "num(Sum(today)/Sum(yesterday),'#,##0%')",
      qExpr: "num(Count( distinct Purchases),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "avgOrderValue",
      qExpr: "num(Avg(Values),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "quantities",
      qExpr: "num(Sum(Quantities),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];

  const { dataSet, metrics } = useData({
    cols: [
      {
        qField: "Period",
        qLabel: "Period",
      },

      {
        qField: "=sum(Conversions)",
        qLabel: "Conversions",
      },
      {
        qField: "=sum(Purchases)",
        qLabel: "Purchases",
      },
      {
        qField: "=sum(Values)",
        qLabel: "Values",
      },
      {
        qField: "=sum(Quantities)",
        qLabel: "Quantities",
      },
    ],
    qMetrics,
  });

  const { data } = dataSet;

  const labels = data ? data.map((n) => n["Period"]) : [];

  const conversionChart1 = {
    options: {
      chart: {
        id: "sparkline1",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Conversions",
        data: data ? data.map((n) => n["Conversions"]) : [],
      },
    ],
  };

  const conversionChart2 = {
    options: {
      chart: {
        id: "sparkline2",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Purchases",
        data: data ? data.map((n) => n["Purchases"]) : [],
      },
    ],
  };

  const conversionChart3 = {
    options: {
      chart: {
        id: "sparkline3",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Values",
        data: data ? data.map((n) => n["Values"]) : [],
      },
    ],
  };

  const conversionChart4 = {
    options: {
      chart: {
        id: "sparkline4",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Quantities",
        data: data ? data.map((n) => n["Quantities"]) : [],
      },
    ],
  };

  const conversions = [
    {
      id: 1,
      title: "KPI Rate",
      rate: Math.random().toFixed(2) + "%",
      change: {
        percentage: Math.random().toFixed(1) + "%",
        growth: "up",
        time: "than last week",
      },
      chart: conversionChart1,
    },
    {
      id: 2,
      title: "Unique Purchases",
      rate: metrics && metrics["uniquePurchase"],
      change: {
        percentage: Math.random().toFixed(1) + "%",
        growth: "down",
        time: "than last week",
      },
      chart: conversionChart2,
    },
    {
      id: 3,
      title: "Avg. Order Value",
      rate: metrics && metrics["avgOrderValue"],
      change: {
        percentage: Math.random().toFixed(1) + "%",
        growth: "down",
        time: "than last week",
      },
      chart: conversionChart3,
    },
    {
      id: 4,
      title: "Order Quantity",
      rate: metrics && metrics["quantities"],
      change: {
        percentage: Math.random().toFixed(1) + "%",
        growth: "up",
        time: "than last week",
      },
      chart: conversionChart4,
    },
  ];

  return (
    <Content>
      <Row gutters={10}>
        {metrics &&
          conversions.map((data) => (
            <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
              <KPI
                title={data.title}
                rate={data.rate}
                change={data.change}
                chart={data.chart}
              />
            </Col>
          ))}
      </Row>
    </Content>
  );
};

export default RowOne;
