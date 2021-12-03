import { useState, useEffect } from "react";
import Statistics from "../../stats/Statistics";
import styles from "./Panel.module.css";
import BackgroundPanel from "../background-panels/BackgroundPanel";
import Aos from "aos";
import "aos/dist/aos.css";

const PanelLeft = (props) => {
  const [align, setAlign] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  let name = align ? styles.transitionright : styles.transitionreturnleft;
  const BorderAlign = align ? styles.hiddenBorder : "";
  const transitionDelay = align === true ? 0.7 : 0;
  const highlighted = align ? styles.animated : styles.static;
  const panelname =
    props.side === "right" ? styles.panelright : styles.panelleft;
  if (props.side === "right") {
    name = align ? styles.transitionleft : styles.transitionreturnright;
  } else {
    name = align ? styles.transitionright : styles.transitionreturnleft;
  }
  return (
    <>
      <BackgroundPanel side={props.side} align={align} />
      <div
        className={`${styles.split} ${styles.bordered} ${name} ${BorderAlign} ${panelname} `}
        style={{
          transition: `0.7s ease-in-out all; 0s z-index  ${transitionDelay}s`,
        }}
        onClick={(e) => {
          setAlign(!align);
          if (align) {
            document.querySelector(".homePage_vl__1SoO5").style.zIndex = "1";
          } else {
            setTimeout(() => {
              document.querySelector(".homePage_vl__1SoO5").style.zIndex = "3";
            }, 700);
          }
        }}
      >
        <div className={`${styles.centered}`}>
          <div>
            <Statistics {...props.stat} align={align} />
          </div>
          <div data-aos="fade-up">
            <div className={highlighted}>
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PanelLeft;
