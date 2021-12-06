import React from "react";
import Timeline from "../../Components/Timeline/Timeline";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div>
      <div className={styles.parallax}>
        <div className={styles.empty}></div>
        <Timeline />
        <div className={styles.empty}></div>
      </div>
    </div>
  );
}
export default HomePage;
