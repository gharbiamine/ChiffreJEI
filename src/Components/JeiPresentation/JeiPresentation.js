import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./JeiPresentation.module.css";
import IntroductiveVideo from "../IntroductiveVideo/IntroductiveVideo";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function JeiPresentation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles[`content-section`]} data-aos="fade-right">
          <div className={styles.title}>
            <Typewriter
              options={{
                strings: ["Lorem Ipsum"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div class={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.social}>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.icon}
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className={styles[`video-section`]} data-aos="fade-left">
          <IntroductiveVideo />
        </div>
      </div>
    </div>
  );
}
export default JeiPresentation;
