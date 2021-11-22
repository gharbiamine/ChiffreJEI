import React, { useEffect } from "react";
import styles from "./Timeline.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
function TimelineEvent(prop) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var animation = "";
  var classStyle = "";
  if (prop.odd % 2) {
    animation = "fade-right";
    classStyle=styles.left;
  }
  else {
    animation = "fade-left";
    classStyle =styles.right;
  }
  return (
    <li
      className={classStyle}
      onMouseOver={(e) => {
        var target = e.target.closest("li");
        var timeline = target.parentElement.parentElement;
        if (target) {
          const element = target.querySelector("h1");
          if (element) {
            element.style.color = "#e7015e";
            target.style.setProperty("--color", "#e7015e");
            timeline.style.setProperty("--color", "#e7015e");
          }
        }
      }}
      onMouseLeave={(e) => {
        const target = e.target.closest("li");
        var timeline = target.parentElement.parentElement;
        if (target) {
          const element = target.querySelector("h1");
          if (element) {
            element.style.color = "#1c1c24";
            target.style.setProperty("--color", "#004059");
            timeline.style.setProperty("--color", "#004059");
          }
        }
      }}
    >
      <div data-aos={animation}>
        <img
          className={styles.president}
          src="assets/images/timeline/MBA-modified.png"
          alt=""
        ></img>
        <div className={styles[`timeline-content`]}>
          {/* <h3 className={styles.date}>{prop.event.date}</h3> */}
          <h1>
            {prop.event.title} - {prop.event.date}
          </h1>
          <p>{prop.event.description}</p>
        </div>
      </div>
    </li>
  );
}
export default TimelineEvent;
