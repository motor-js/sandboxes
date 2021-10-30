import { Col, Row } from "styled-bootstrap-grid";
import styled, {
  space,
  themeGet,
  layout,
  css,
  device,
  border,
  typography,
  position as positionProps,
} from "../../styled";

const colorCSS = css`
  color: #ffffff;
  .card-header {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
  .card-text,
  .card-title,
  p,
  small {
    color: #ffffff;
  }
`;

export const StyledCard = styled(
  ({
    ml,
    mr,
    mt,
    mb,
    pl,
    pr,
    pt,
    pb,
    p,
    width,
    height,
    minWidth,
    maxWidth,
    ...props
  }) => <div {...props} />
)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid ${themeGet("colors.border")};
  border-radius: ${themeGet("radii.rounded")};
  ${(props) =>
    props.$color === "primary" &&
    css`
      background-color: ${themeGet("colors.primary")};
      ${colorCSS};
    `}
  ${(props) =>
    props.$color === "secondary" &&
    css`
      background-color: ${themeGet("colors.secondary")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "success" &&
    css`
      background-color: ${themeGet("colors.success")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "warning" &&
    css`
      background-color: ${themeGet("colors.warning")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "danger" &&
    css`
      background-color: ${themeGet("colors.danger")};
      ${colorCSS};
    `}
    ${(props) =>
    props.$color === "info" &&
    css`
      background-color: ${themeGet("colors.info")};
      ${colorCSS};
    `}
    ${layout};
  ${space};
`;

export const StyledCardBody = styled(
  ({
    textAlign,
    ml,
    mr,
    mt,
    mb,
    pl,
    pr,
    pt,
    pb,
    p,
    py,
    px,
    position,
    ...props
  }) => <div {...props} />
)`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;
  ${device.small} {
    padding: 20px;
  }
  ${space};
  ${positionProps};
  ${typography};
`;

export const StyledCardTitle = styled.h6`
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${themeGet("colors.text2")};
  margin-bottom: 8px;
`;

export const StyledCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  ${device.large} {
    display: block;
  }
  ${device.xlarge} {
    display: flex;
  }
`;

export const StyledCardRate = styled.h3`
  line-height: 1.1;
  margin-right: 5px;
  margin-bottom: 0px;
  font-family: ${themeGet("fonts.rubik")};
  font-weight: 400;
`;

export const StyledCardText = styled.p`
  margin-bottom: 0px;
  color: ${themeGet("colors.text3")};
  font-size: 11px;
`;

export const StyledCardChangePercent = styled.span`
  font-weight: 500;
  ${({ $growth }) =>
    $growth === "up" &&
    css`
      color: ${themeGet("colors.success")};
    `}

  ${({ $growth }) =>
    $growth === "down" &&
    css`
      color: ${themeGet("colors.danger")};
    `}
`;

export const StyledChart = styled.div`
  margin-top: 10px;
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: -15px;
  ${device.small} {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
  }
`;

export const StyledCol = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, textAlign, ...props }) => (
    <Col {...props} />
  )
)`
  ${device.small} {
    &.order-sm-0 {
      order: 0;
    }
  }
  ${device.medium} {
    &.order-md-0 {
      order: 0;
    }
  }
  ${device.large} {
    &.order-lg-0 {
      order: 0;
    }
  }
  ${device.xlarge} {
    &.order-xl-0 {
      order: 0;
    }
  }
  ${space};
  ${border};
  ${typography};
`;

export const StyledRow = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => <Row {...props} />
)`
  ${space};
  ${({ $gutters }) =>
    !!$gutters &&
    css`
      margin-left: -${$gutters / 2}px;
      margin-right: -${$gutters / 2}px;
      & > div {
        padding-left: ${$gutters / 2}px;
        padding-right: ${$gutters / 2}px;
      }
    `}
  ${({ $noGutter }) =>
    $noGutter === true &&
    css`
      margin-left: 0px;
      margin-right: 0px;
      & > div {
        padding-left: 0px;
        padding-right: 0px;
      }
    `}
`;
