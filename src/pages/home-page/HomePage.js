import React from "react";
import styles from "./homePage.module.css";
import Panel from "../../components/panels/foreground-panels/Panel";

export const HomePage = () => {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.fullscreen}>
          <div className={styles.panelContainer}>
            <Panel
              side={"left"}
              title={"Projets réalisés"}
              stat={{ start: 1, end: 20, delay: 0, duration: 2 }}
            />

            <Panel
              side={"right"}
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
          <div className={styles.vl}></div>
        </div>
      </div>
    </>
  );
};
