import React from "react";
import styles from "./SquareStat.module.css";

export const SquareStat = ({ align, text, number }) => {
  const DescriptionText = align ? styles.animated : styles.hidden;
  return (
    <div className={styles.squareBox}>
      <div
        className={`${styles.square} ${styles.centered} ${DescriptionText}`}
      ></div>
      <div
        className={`${styles.square} ${styles.centered} ${DescriptionText}`}
      ></div>
    </div>
  );
};
