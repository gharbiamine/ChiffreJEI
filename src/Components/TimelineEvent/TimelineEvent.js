import React, { useRef } from "react";
import styles from "./TimelineEvent.module.css";
function TimelineEvent(prop) {
  const location = useRef();
  function handleClick() {
    location.current.scrollIntoView({ behavior: "smooth" });
  }
  var classStyle = "";
  if (prop.odd % 2) {
    classStyle = styles.left;
  } else {
    classStyle = styles.right;
  }
  return (
    <li
      ref={location}
      className={classStyle}
      onClick={handleClick}
      onMouseOver={(e) => {
        var target = e.target.closest("li");
        var timeline = target.parentElement.parentElement;
        if (target) {
          const title = target.querySelector("h1");
          const date = target.querySelector("h3");
          if (title && date) {
            title.style.color = "#e7015e";
            date.style.color = "#e7015e";
            target.style.setProperty("--color", "#e7015e");
            timeline.style.setProperty("--color", "#e7015e");
          }
        }
      }}
      onMouseLeave={(e) => {
        const target = e.target.closest("li");
        var timeline = target.parentElement.parentElement;
        if (target) {
          const title = target.querySelector("h1");
          const date = target.querySelector("h3");
          if (title && date) {
            title.style.color = "#004059";
            date.style.color = "#004059";
            target.style.setProperty("--color", "#004059");
            timeline.style.setProperty("--color", "#004059");
          }
        }
      }}
    >
      <div>
        <img
          className={styles.president}
          src="assets/images/timeline/MBA-modified.png"
          alt=""
        ></img>
        <div className={styles[`timeline-content`]}>
          <h3 className={styles.date}>{prop.event.date}</h3>
          <h1>{prop.event.title}</h1>
          <p>{prop.event.description}</p>
        </div>
      </div>
    </li>
  );
}
export default TimelineEvent;
