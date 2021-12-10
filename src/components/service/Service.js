import React, { useEffect } from "react";
import styles from "./service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
function Service(prop) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className={styles.card}
      // onMouseOver={(e) => {
      //   var target = e.target.closest("div");
      //   if (target) {
      //     const element = target.querySelector("svg");
      //     if (element) {
      //       element.style.setProperty("--color", "#e7015e");
      //       element.style.fontSize = "50px";
      //     }
      //   }
      // }}
      // onMouseLeave={(e) => {
      //   var target = e.target.closest("div");
      //   if (target) {
      //     const element = target.querySelector("svg");
      //     if (element) {
      //       element.style.setProperty("--color", "#004059");
      //       element.style.fontSize = "34px";
      //     }
      //   }
      // }}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon className={styles.icons} icon={prop.icon} />
      </div>
      <p className={styles.title}>{prop.title}</p>
      <p className={styles.text}>{prop.description}</p>
    </div>
  );
}
export default Service;
