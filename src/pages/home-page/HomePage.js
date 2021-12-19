import React from "react";
import { ExecutiveBoard } from "../../components/executive-board/ExecutiveBoard";
import Timeline from "../../components/timeline/Timeline";
import OurServices from "../../components/our-services/OurServices";
import JeiPresentation from "../../components/jei-presentation/JeiPresentation";
import styles from "./homePage.module.css";
import JeiNumbers from "../../components/jei-numbers/JeiNumbers";
import Sidebar from "../../components/sidebar/Sidebar";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className={styles.parallax}>
        <div className={styles.empty}></div>
        <JeiPresentation />
        <div className={styles.empty}></div>
        <OurServices />
        <div className={styles.empty}></div>
        <div className={styles.global}>
          <ExecutiveBoard />
        </div>
        <div className={styles.empty}></div>
        <Timeline />
        <div className={styles.empty}></div>
        <JeiNumbers />
        <div className={styles.empty}></div>
      </div>
    </div>
  );
}
export default HomePage;
