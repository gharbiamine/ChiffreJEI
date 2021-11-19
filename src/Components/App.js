import { StrictMode } from "react";
import { render } from "react-dom";
import PanelRight from "./PanelRight";
import PanelLeft from "./PanelLeft";
import "./App.css";
import BackgroundPanel from "./BackgroundPanel";

function App() {
  return (
    <div className="App">
      <BackgroundPanel side={"left"} />
      <BackgroundPanel side={"right"} />
      <PanelLeft
        title={"Projets réalisés"}
        stat={{ start: 1, end: 1000, delay: 0, duration: 2 }}
      />
      <PanelRight
        title={"Pourcentage el rojla"}
        stat={{ start: 1, end: 100, delay: 0, duration: 2 }}
      />
    </div>
  );
}

export default App;
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
