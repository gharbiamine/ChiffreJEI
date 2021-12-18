import Typewriter from "typewriter-effect";
import styles from "./loader.module.css";
import React, { useState, useEffect } from "react";
function Loader() {
  const [playbutton, showPlaybutton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      showPlaybutton(true);
    }, 5000);
  }, []);
  return (
    <div className={styles.loader}>
      <div className={styles.centered}>
        <h1>Junior Entreprise Insat </h1>
      </div>
      <div
        className={styles[`lds-roller`]}
        style={{ display: playbutton ? "none" : "block" }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        id="loader"
        className={styles.play}
        style={{ display: playbutton ? "block" : "none" }}
      ></div>
      <div className={styles.text}>
        <Typewriter
          options={{
            strings: ["Trust tomorrow's engineers"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
export default Loader;
