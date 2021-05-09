import "./styles.css";
import Pie from "./Pie";

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Pie />
      </div>
    </div>
  );
}
