import "./styles.css";
import { Card } from "semantic-ui-react";
import Map from "./Map";
import ButtonComponent from "./Button";

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content>
            <Map />
            <ButtonComponent />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
