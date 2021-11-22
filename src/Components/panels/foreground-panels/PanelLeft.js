import { useState } from "react";
import Statistics from "../../stats/Statistics";
import styles from "../Panel.module.css";

const PanelLeft = (props) => {
  const [align, setAlign] = useState(false);

  let name = align ? styles.transitionright : styles.transitionreturnleft;
  const transitionDelay = align === true ? 0.7 : 0;

  return (
    <div
      className={`${styles.split} ${styles.panelleft} ${name}`}
      style={{
        transition: `0.7s ease-in-out all; 0s z-index  ${transitionDelay}s`,
      }}
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
export default PanelLeft;
