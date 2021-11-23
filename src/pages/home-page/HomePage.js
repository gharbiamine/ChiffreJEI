import React from "react";
import styles from "./homePage.module.css";
import { FullPage, Slide } from "react-full-page";
import PanelRight from "../../Components/panels/foreground-panels/PanelRight";
import PanelLeft from "../../Components/panels/foreground-panels/PanelLeft";

export const HomePage = () => {
  return (
    <>
      <div className={styles.App}>
        <FullPage>
          <Slide>
            <div className={styles.fullscreen}>
              <PanelLeft
                title={"Projets réalisés"}
                stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
              />
              <PanelRight
                title={"Pourcentage el rojla"}
                stat={{
                  start: 50,
                  end: 100,
                  delay: 0,
                  duration: 2,
                  suffix: "%",
                }}
              />
            </div>
          </Slide>
          <Slide>
            <div className={styles.fullscreen}>
              <PanelLeft
                title={"Projets réalisés"}
                stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
              />
              <PanelRight
                title={"Pourcentage el rojla"}
                stat={{
                  start: 50,
                  end: 100,
                  delay: 0,
                  duration: 2,
                  suffix: "%",
                }}
              />
            </div>
          </Slide>
          <Slide>
            <div className={styles.fullscreen}>
              <PanelLeft
                title={"Projets réalisés"}
                stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
              />
              <PanelRight
                title={"Pourcentage el rojla"}
                stat={{
                  start: 50,
                  end: 100,
                  delay: 0,
                  duration: 2,
                  suffix: "%",
                }}
              />
            </div>
          </Slide>
        </FullPage>
      </div>
    </>
  );
};
