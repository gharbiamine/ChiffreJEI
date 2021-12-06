import React from "react";
import Timeline from "../../Components/Timeline/Timeline";
import OurServices from "../../Components/OurServices/OurServices";
import JeiPresentation from "../../Components/JeiPresentation/JeiPresentation";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div>
      <div className={styles.parallax}>
        <div className={styles.empty}></div>
        <JeiPresentation />
        <div className={styles.empty}></div>
        <OurServices />
        <div className={styles.empty}></div>
        <Timeline />
      </div>
    </div>
  );
}
export default HomePage;
