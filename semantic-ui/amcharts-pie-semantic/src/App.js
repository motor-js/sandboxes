import "./styles.css";
import { Card } from "semantic-ui-react";
import Pie from "./Pie";
import ButtonComponent from "./Button";

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content style={{ margin: "20px" }}>
            <Pie />
            <ButtonComponent />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
