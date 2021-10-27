import React, { useRef } from "react";

import {
  SelectionModalWrapper,
  SelectionModalButtonConfirm,
  SelectionModalButtonCancel,
} from "./styles/SelectionModalTheme";

function StyledSelectionModal({
  confirmCallback,
  cancelCallback,
  isOpen,
  margin,
  offset,
  offsetX,
  width,
  hoverOpacityConfirm,
  hoverOpacityCancel,
  bckgColorConfirm,
  bckgColorCancel,
  borderColorConfirm,
  borderColorCancel,
  borderSizeConfirm,
  borderSizeCancel,
  borderStyleConfirm,
  borderStyleCancel,
  borderRadiusConfirm,
  borderRadiusCancel,
  colorConfirm,
  colorCancel,
}) {
  // Ref
  const ref = useRef();

  // const theme = useContext(ThemeContext) || defaultTheme;

  const confirmSelections = () => {
    confirmCallback();
  };

  const cancelSelections = () => {
    cancelCallback();
  };

  return (
    <>
      {isOpen && (
        <SelectionModalWrapper
          ref={ref}
          offset={offset}
          offsetX={offsetX}
          width={width}
          margin={margin}
        >
          <SelectionModalButtonCancel
            // theme={theme}
            type="button"
            className="cancelSelections"
            bckgColor={bckgColorCancel}
            borderColor={borderColorCancel}
            borderSize={borderSizeCancel}
            borderStyle={borderStyleCancel}
            borderRadius={borderRadiusCancel}
            color={colorCancel}
            hoverOpacity={hoverOpacityCancel}
            onClick={cancelSelections}
          >
            <div className="cancelSelections">CANCEL</div>
          </SelectionModalButtonCancel>
          <SelectionModalButtonConfirm
            type="button"
            className="confirmSelections"
            bckgColor={bckgColorConfirm}
            borderColor={borderColorConfirm}
            borderSize={borderSizeConfirm}
            borderStyle={borderStyleConfirm}
            borderRadius={borderRadiusConfirm}
            color={colorConfirm}
            hoverOpacity={hoverOpacityConfirm}
            onClick={confirmSelections}
          >
            <div>CONFIRM</div>
          </SelectionModalButtonConfirm>
        </SelectionModalWrapper>
      )}
    </>
  );
}

export default StyledSelectionModal;
