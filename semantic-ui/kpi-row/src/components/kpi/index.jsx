/* eslint-disable @typescript-eslint/no-explicit-any */
import ApexChart from "react-apexcharts";
import classNames from "classnames";

import {
  StyledCard,
  StyledCardBody,
  StyledCardTitle,
  StyledCardBottom,
  StyledCardRate,
  StyledCardText,
  StyledCardChangePercent,
  StyledChart,
  StyledCol,
  StyledRow,
} from "./style";

/**
 * Card Component
 */

export const Card = ({ children, className, color, ...restProps }) => {
  return (
    <StyledCard
      className={classNames(className, "card")}
      {...restProps}
      $color={color}
    >
      {children}
    </StyledCard>
  );
};

/**
 * Card Body Component
 */

export const CardBody = ({ children, className, ...restProps }) => {
  return (
    <StyledCardBody
      className={classNames(className, "card-body")}
      {...restProps}
    >
      {children}
    </StyledCardBody>
  );
};

const ApexAreaChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="area"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const Col = ({ className, ...props }) => {
  const { smOrder, mdOrder, lgOrder, xlOrder } = props;
  const restProps = props;
  let orderSm;
  let orderMd;
  let orderlg;
  let orderXl;

  if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
    if (smOrder === 0) {
      orderSm = `order-sm-${smOrder}`;
      delete restProps.smOrder;
    }
    if (mdOrder === 0) {
      orderMd = `order-md-${mdOrder}`;
      delete restProps.mdOrder;
    }
    if (lgOrder === 0) {
      orderlg = `order-lg-${lgOrder}`;
      delete restProps.lgOrder;
    }
    if (xlOrder === 0) {
      orderXl = `order-xl-${xlOrder}`;
      delete restProps.xlOrder;
    }
  }

  return (
    <StyledCol
      className={classNames(className, orderSm, orderMd, orderlg, orderXl)}
      {...restProps}
    />
  );
};

export const Row = ({ className, gutters, noGutter, ...props }) => {
  return (
    <StyledRow
      $gutters={gutters}
      $noGutter={noGutter}
      className={className}
      {...props}
    />
  );
};

export const KPI = ({ title, rate, change, chart }) => {
  return (
    <Card>
      <CardBody>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardBottom>
          <StyledCardRate>{rate}</StyledCardRate>
          <StyledCardText>
            <StyledCardChangePercent $growth={change.growth}>
              {change?.percentage}{" "}
              {change?.growth === "up" && <i className="fa fa-arrow-up" />}
              {change?.growth === "down" && (
                <i className="fa fa-arrow-down" />
              )}{" "}
            </StyledCardChangePercent>
            {change?.time && <>{change?.time}</>}
          </StyledCardText>
        </StyledCardBottom>
        <StyledChart>
          {chart && (
            <ApexAreaChart
              options={chart?.options}
              series={chart?.series}
              height={70}
            />
          )}
        </StyledChart>
      </CardBody>
    </Card>
  );
};
