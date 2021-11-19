import { useEffect, useCallback, useState } from "react";
import Statistics from "./Statistics";
import "./Panel.css";
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
      cssClass = `${side}  ${transition}`;
    } else {
      transition = transitions[1 - swap];
      cssClass = `${side}`;
      setTimeout(() => {
        document.querySelector("." + panel).style.zIndex = 1;
        console.log("here");
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
      <div className="centered">
        <div>
          <Statistics {...props.stat} align={align} />
        </div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
export default PanelLeft;
