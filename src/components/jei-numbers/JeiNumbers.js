import React from "react";
import styles from "./JeiNumbers.module.css";
import Panel from "../panels/foreground-panels/Panel";

const JeiNumbers = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.vl}></div>
    </div>
  );
};

export default JeiNumbers;
