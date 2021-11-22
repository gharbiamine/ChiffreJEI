import styles from "./Timeline.module.css";
import React from "react";
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import timeline from './Data'
function Timeline() {
  var odd = 0;
  return (
    <div>
      <div className={styles.container}>
        {timeline.map((event) => {
          odd = odd + 1;
          return (
            <div className={styles.timeline} >
              <ul>
                <TimelineEvent event={event} odd={odd}></TimelineEvent>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Timeline;
