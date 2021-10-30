import { Container } from "styled-bootstrap-grid";

import styled, {
  device,
  space,
  border as borderStyle,
  css,
  themeGet,
} from "../../styled";

const conentCSS = css`
  padding: 20px;
  ${device.large} {
    padding: 25px;
    margin-top: 60px;
  }
  ${device.xlarge} {
    padding: 30px;
  }
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      min-height: calc(100vh - 107px);
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}

  ${({ $align }) =>
    $align &&
    $align !== "center" &&
    css`
      & > .container {
        flex: 1;
      }
    `}
	${({ borderBottom, borderBottomWidth }) =>
    (borderBottom || borderBottomWidth) &&
    css`
      border-bottom-style: solid;
      border-bottom-color: ${themeGet("colors.border")};
    `}
    ${space};
  ${borderStyle};
`;

export const StyledContent = styled(
  ({
    p,
    px,
    py,
    m,
    mx,
    my,
    mt,
    borderBottomWidth,
    $fullHeight,
    $align,
    ...rest
  }) => <div {...rest} />
)`
  ${conentCSS}
`;

export const StyledContainer = styled(
  ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => (
    <Container {...props} />
  )
)`
  ${space};
`;
