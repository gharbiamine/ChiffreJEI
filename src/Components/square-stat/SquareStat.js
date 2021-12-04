import React from "react";
import styles from "./SquareStat.module.css";

export const SquareStat = ({ align, text1, text2, number }) => {
  const StatText = align ? styles.animated : styles.hidden;
  return (
    <div className={styles.squareBox}>
      <div className={styles.squareStatContainer}>
        <div
          className={`${styles.square} ${styles.centered} ${StatText}`}
        ></div>
        <div className={`${styles.stat} ${styles.centered} ${StatText}`}>
          {text1}
        </div>
      </div>
      <div className={styles.squareStatContainer}>
        <div
          className={`${styles.square} ${styles.centered} ${StatText}`}
        ></div>
        <div className={`${styles.stat} ${styles.centered} ${StatText}`}>
          {text2}
        </div>
      </div>
    </div>
  );
};
