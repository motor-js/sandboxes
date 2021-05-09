import React from "react";
import { useButton } from "@motor-js/engine";
import { Button } from "semantic-ui-react";

const ButtonComponent = () => {
  const { clearSelections } = useButton();

  return (
    <Button onClick={clearSelections} style={{ marginTop: "30px" }}>
      Clear Selections
    </Button>
  );
};

export default ButtonComponent;
