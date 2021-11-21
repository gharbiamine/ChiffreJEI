import { useEffect, useCallback, useState } from "react";
import Statistics from "../../stats/Statistics";
import styles from "../Panel.module.css";
var swap = 0;
var transitions = ["transitionleft", "transitionright"];
const PanelRight = (props) => {
  const [align, setAlign] = useState(false);
  let transition = transitions[swap];
  let panel = "panelright";
  let side = "split " + panel;
  let cssClass = `${side}  ${align ? transition : ""}`;
  const memoizedCallback = useCallback(() => {
    if (align) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      transition = transitions[swap];
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cssClass = `${side}  ${transition}`;
    } else {
      transition = transitions[1 - swap];
      cssClass = `${side}`;
      setTimeout((document.querySelector("." + panel).style.zIndex = 1), 700);
    }
  }, [align]);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);
  return (
    <div
      className={`styles.${cssClass}`}
      onClick={() => {
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
export default PanelRight;
