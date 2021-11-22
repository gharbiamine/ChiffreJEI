import { useState, useEffect } from "react";
import Statistics from "../../stats/Statistics";
import styles from "./PanelRight.module.css";
import BackgroundPanel from "../background-panels/BackgroundPanel";
import Aos from "aos";
import "aos/dist/aos.css";

const PanelRight = (props) => {
  const [align, setAlign] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  let name = align ? styles.transitionleft : styles.transitionreturnright;

  return (
    <>
      <BackgroundPanel side={"right"} align={align} />
      <div
        className={`${styles.split} ${styles.panelright} ${name}`}
        onClick={(e) => {
          setAlign(!align);
        }}
      >
        <div className={styles.centered}>
          <div>
            <Statistics {...props.stat} align={align} />
          </div>
          <div data-aos="fade-up">
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default PanelRight;
