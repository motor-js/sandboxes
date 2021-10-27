/* eslint-disable prefer-template */
// import { useContext } from "react";
import StyledSelectionModal from "./StyledSelectionModal";
// import { EngineContext } from "@motor-js/engine";
// import { ThemeContext, theme } from "@motor-js/theme";

function SelectionModal({ ...rest }) {
  //   const myTheme = useContext(ThemeContext) || theme;
  //   const { engine, engineError } = useContext(EngineContext);

  return (
    <StyledSelectionModal
      //   engine={engine}
      //   theme={myTheme}
      //   engineError={engineError}
      //listData={listData}
      {...rest}
    />
  );
}

SelectionModal.propTypes = {};

SelectionModal.defaultProps = {};

export default SelectionModal;
