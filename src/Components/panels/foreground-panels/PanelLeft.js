import { useEffect, useCallback, useState } from "react";
import Statistics from "../../stats/Statistics";
import styles from "../Panel.module.css";

const PanelLeft = (props) => {
  const [align, setAlign] = useState(false);

  let name = align ? styles.transitionright : "";
  const memoizedCallback = useCallback(() => {}, [align]);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return (
    <div
      className={`${styles.split} ${styles.panelleft} ${name}`}
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
