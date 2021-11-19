import { useEffect, useCallback, useState } from "react";
import Statistics from "./Statistic";
import "./Panel.css";
var swap = 0;
var transitions = ["transitionright", "transitionleft"];
const PanelLeft = (props) => {
  const [align, setAlign] = useState(false);
  let transition = transitions[swap];
  let side = "split panelleft";
  let cssClass = `${side}  ${align ? transition : ""}`;
  const memoizedCallback = useCallback(() => {
    if (align) {
      transition = transitions[swap];
      cssClass = `${side}  ${align ? transition : ""}`;
    } else {
      transition = transitions[1 - swap];
      cssClass = `${side}  ${align ? transition : ""}`;
    }
  }, [align]);
  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);
  return (
    <div
      className={cssClass}
      onClick={() => {
        setAlign(!align);
        // swap = 1 - swap;
        console.log(align);
        console.log(cssClass);
        console.log(swap);
      }}
    >
      <div className="centered">
        <div>
          <Statistics {...props.stat} />
        </div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
export default PanelLeft;
