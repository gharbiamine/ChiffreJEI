import CountUp from "react-countup";
import React from "react";
import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../stats/Statistics.module.css";

const Statistic = (props) => {
  useEffect(() => {
    // document.querySelector(".stat").style.fontSize = "300px";
    console.log("Stat useEffect");
  }, [props.align]);

  return (
    <div
      className={styles.stat}
      onClick={() => {
        console.log("Stat on click");
      }}
    >
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? (
              <CountUp
                start={props.start}
                end={props.end}
                delay={props.delay}
                duration={props.duration}
                suffix={props.suffix || ""}
                prefix={props.prefix || ""}
                useEasing={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            ) : null}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Statistic;
