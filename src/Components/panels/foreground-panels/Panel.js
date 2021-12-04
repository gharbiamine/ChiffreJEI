import { useState, useEffect } from "react";
import Statistics from "../../stats/Statistics";
import styles from "./Panel.module.css";
import BackgroundPanel from "../background-panels/BackgroundPanel";
import Aos from "aos";
import "aos/dist/aos.css";
/*
  This component represents the main visible pannel that can be clicked on to reveal further informations 
  
*/
const PanelLeft = (props) => {
  //state indicating whether a panel has been moved or not
  const [align, setAlign] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  //panel alignment
  let name = align ? styles.transitionright : styles.transitionreturnleft;
  const panelname =
    props.side === "right" ? styles.panelright : styles.panelleft;
  if (props.side === "right") {
    name = align ? styles.transitionleft : styles.transitionreturnright;
  } else {
    name = align ? styles.transitionright : styles.transitionreturnleft;
  }
  //animations depending on aligement
  const BorderAlign = align ? styles.hiddenBorder : "";
  const highlighted = align ? styles.animated : styles.static;
  //delay to smooth z-index transitions and prevent clipping
  const transitionDelay = align === true ? 0.7 : 0;
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
          //tries to solve the css divider z-index value conflict when animating
          //classname is chaotic due to the usage of css modules
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
