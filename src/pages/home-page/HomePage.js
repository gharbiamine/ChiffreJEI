

import React from "react";
import {ExecutiveBoard} from "../../components/executive-board/ExecutiveBoard";
import Timeline from "../../components/timeline/Timeline";
import OurServices from "../../components/our-services/OurServices";
import JeiPresentation from "../../components/jei-presentation/JeiPresentation";
import styles from "./homePage.module.css";
import Panel from "../../components/panels/foreground-panels/Panel";


function HomePage() {
  return (
    <div>
      <div className={styles.parallax}>
        <div className={styles.empty}></div>
        <JeiPresentation />
        <div className={styles.empty}></div>
        <OurServices />
          <div className={styles.empty}></div>
          <div className={styles.global}>
              <ExecutiveBoard/>

          </div>
        <div className={styles.empty}></div>
        <Timeline />
          <div className={styles.empty}></div>
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
          <div className={styles.empty}></div>
      </div>

    </div>
  );
}
export default HomePage;

