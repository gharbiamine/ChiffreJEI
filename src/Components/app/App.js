import { StrictMode } from "react";
import { render } from "react-dom";
import PanelRight from "../panels/foreground-panels/PanelRight";
import PanelLeft from "../panels/foreground-panels/PanelLeft";

import styles from "./App.module.css";
import BackgroundPanel from "../panels/background-panels/BackgroundPanel";
import { FullPage, Slide } from "react-full-page";

function App() {
  return (
    <div className={styles.App}>
      <FullPage>
        <Slide>
          <div className={styles.fullscreen}>
            <BackgroundPanel side={"left"} />
            <BackgroundPanel side={"right"} />
            <PanelLeft
              title={"Projets réalisés"}
              stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
            />
            <PanelRight
              title={"Pourcentage el rojla"}
              stat={{ start: 1, end: 100, delay: 0, duration: 2, suffix: "%" }}
            />
          </div>
        </Slide>
        <Slide>
          <div className={styles.fullscreen}>
            <BackgroundPanel side={"left"} />
            <BackgroundPanel side={"right"} />
            <PanelLeft
              title={"Projets réalisés"}
              stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
            />
            <PanelRight
              title={"Pourcentage el rojla"}
              stat={{ start: 1, end: 100, delay: 0, duration: 2, suffix: "%" }}
            />
          </div>
        </Slide>
        <Slide>
          <div className={styles.fullscreen}>
            <BackgroundPanel side={"left"} />
            <BackgroundPanel side={"right"} />
            <PanelLeft
              title={"Projets réalisés"}
              stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
            />
            <PanelRight
              title={"Pourcentage el rojla"}
              stat={{ start: 1, end: 100, delay: 0, duration: 2, suffix: "%" }}
            />
          </div>
        </Slide>
      </FullPage>
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
