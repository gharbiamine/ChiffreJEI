import styles from "./BackgroundPanel.module.css";
import React from "react";
import { SquareStat } from "../../square-stat/SquareStat";

export const BackgroundPanel = ({ side, align }) => {
  const name = side === "right" ? styles.backpanelright : styles.backpanelleft;
  const DescriptionText = align ? styles.animated : styles.hidden;
  const BorderAlign = align ? styles.hiddenBorder : "";
  return (
    <>
      <div
        className={`${styles.split} ${styles.bordered} ${name} ${BorderAlign}`}
      >
        <div
          className={`${styles.title} ${styles.centered} ${DescriptionText}`}
        >
          lorem impsum
        </div>
        <div className={styles.box}>
          <div className={styles.descriptionBox}>
            <div
              className={`${styles.description} ${styles.centered} ${DescriptionText}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              blandit vehicula dui, sit amet sagittis ex. Aenean tempor
              ullamcorper ultrices. Sed orci ex, gravida eu rhoncus eu, mollis
              vel eros. Vivamus maximus quam a massa fermentum sollicitudin.
              Phasellus bibendum nunc non dui cursus luctus. Morbi eget pretium
              tortor.
            </div>
            <div
              className={`${styles.description} ${styles.centered} ${DescriptionText}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              blandit vehicula dui, sit amet sagittis ex. Aenean tempor
              ullamcorper ultrices. Sed orci ex, gravida eu rhoncus eu, mollis
              vel eros. Vivamus maximus quam a massa fermentum sollicitudin.
              Phasellus bibendum nunc non dui cursus luctus. Morbi eget pretium
              tortor.
            </div>
            <SquareStat align={align} text1="Lorem" text2="ipsum" />
            <SquareStat align={align} text1="Lorem" text2="ipsum" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundPanel;
