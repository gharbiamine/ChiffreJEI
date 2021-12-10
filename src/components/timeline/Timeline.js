import styles from "./timeline.module.css";
import { React, useEffect } from "react";
import TimelineEvent from "../timeline-event/TimelineEvent";
import timeline from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";
function Timeline() {
  var odd = 0;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        {timeline.map((event) => {
          odd = odd + 1;
          return (
            <div className={styles.timeline}>
              <ul data-aos="zoom-out">
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
