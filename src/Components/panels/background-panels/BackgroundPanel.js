import styles from "./BackgroundPanel.module.css";
import React from "react";

export const BackgroundPanel = (props) => {
  const side = props.side;
  const name = side === "right" ? styles.backpanelright : styles.backpanelleft;

  return <div className={`${styles.split} ${name}`}></div>;
};

export default BackgroundPanel;
