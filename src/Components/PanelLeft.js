import { useEffect, useCallback, useState } from "react";
import Statistics from "./Statistic";
import "./Panel.css";
import { getElementError } from "@testing-library/dom";
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
      transition = transitions[swap];
      cssClass = `${side}  ${align ? transition : ""}`;
    } else {
      transition = transitions[1 - swap];
      cssClass = `${side}  ${align ? transition : ""}`;
      document.querySelector("." + panel).style.zIndex = 1;
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
        document.querySelector("." + panel).style.zIndex += 2;
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
