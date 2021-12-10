
import React from "react";
import {ExecutiveBoard} from "../../components/executive-board/ExecutiveBoard";
import Timeline from "../../components/timeline/Timeline";
import OurServices from "../../components/our-services/OurServices";
import JeiPresentation from "../../components/jei-presentation/JeiPresentation";
import styles from "./homePage.module.css";


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

      </div>

    </div>
  );
}
export default HomePage;

