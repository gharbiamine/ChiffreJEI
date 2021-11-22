import { useState } from "react";
import Statistics from "../../stats/Statistics";
import styles from "../Panel.module.css";

const PanelRight = (props) => {
  const [align, setAlign] = useState(false);

  let name = align ? styles.transitionleft : styles.transitionreturnright;

  return (
    <div
      className={`${styles.split} ${styles.panelright} ${name}`}
      onClick={(e) => {
        setAlign(!align);
      }}
    >
      <div className={styles.centered}>
        <div>
          <Statistics {...props.stat} align={align} />
        </div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
export default PanelRight;
