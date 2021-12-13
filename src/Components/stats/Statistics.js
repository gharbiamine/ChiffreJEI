import CountUp from "react-countup";
import React from "react";
import { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../stats/Statistics.module.css";
/*
  this component servers to provide the main countup statistic with a brief description
  it uses a visibility sensor to queue the animation
*/
const Statistic = ({ start, end, delay, duration, align, prefix, suffix }) => {
  const highlighted = align ? styles.animated : styles.static;
  useEffect(() => {}, [align]);

  return (
    <div className={`${styles.stat} ${highlighted}`} onClick={() => {}}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            style={{ height: 140 }}
            className={`${styles.stat} ${highlighted}`}
          >
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
