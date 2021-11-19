import "./App.css";
import CountUp from "react-countup";
import React from "react";
import { useEffect, useRef } from "react";

const Statistic = (props) => {
  const refContainer = useRef(false);
  useEffect(() => {
    // document.querySelector(".stat").style.fontSize = "300px";
    console.log("jhkjhezhfjke");
  }, [props.align]);

  return (
    <div
      className="stat"
      onClick={() => {
        console.log("hereeee");
      }}
    >
      <CountUp
        start={props.start}
        end={props.end}
        delay={props.delay}
        duration={props.duration}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Statistic;
