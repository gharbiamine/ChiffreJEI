import { useEffect, useCallback, useState } from "react";
import Statistics from "../../stats/Statistics";
import styles from "../Panel.module.css";
var swap = 0;
var transitions = ["transitionright", "transitionleft"];
const PanelLeft = (props) => {
  const [align, setAlign] = useState(false);
  let transition = transitions[swap];
  let panel = "panelleft";
  let side = "split " + panel;
  let cssClass = `${side}  ${align ? transition : ""}`;
  const memoizedCallback = useCallback(() => {
    if (align) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      transition = transitions[swap];
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cssClass = `styles.${side}  styles.${transition}`;
      console.log(cssClass);
    } else {
      transition = transitions[1 - swap];
      cssClass = `styles.${side}`;
      console.log(cssClass);
      setTimeout(() => {
        document.querySelector("." + panel).style.zIndex = 1;
      }, 700);
    }
  }, [align]);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return (
    <div
      className={cssClass}
      onClick={(e) => {
        setAlign(!align);
        document.querySelector("." + panel).style.zIndex = 2;
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
