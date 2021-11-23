import CountUp from "react-countup";
import React from "react";
import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../stats/Statistics.module.css";

const Statistic = ({ start, end, delay, duration, align, prefix, suffix }) => {
  useEffect(() => {}, [align]);

  return (
    <div
      className={styles.stat}
      onClick={() => {
        // console.log("Stat on click");
      }}
    >
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? (
              <CountUp
                start={start}
                end={end}
                delay={delay}
                duration={duration}
                suffix={suffix || ""}
                prefix={prefix || ""}
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
