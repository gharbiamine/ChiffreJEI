import styles from "./BackgroundPanel.module.css";
import React from "react";

export const BackgroundPanel = ({ side, align }) => {
  const name = side === "right" ? styles.backpanelright : styles.backpanelleft;
  const DescriptionText = align ? styles.animated : styles.hidden;

  return (
    <>
      <div className={`${styles.split} ${name}`} style={{ overflow: "hidden" }}>
        <div className={`${styles.title} ${DescriptionText}`}>lorem impsum</div>
        <div className={`${styles.description} ${DescriptionText}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit
          vehicula dui, sit amet sagittis ex. Aenean tempor ullamcorper
          ultrices. Sed orci ex, gravida eu rhoncus eu, mollis vel eros. Vivamus
          maximus quam a massa fermentum sollicitudin. Phasellus bibendum nunc
          non dui cursus luctus. Morbi eget pretium tortor. Donec non ex non
          urna vulputate condimentum a ut nibh. Fusce blandit commodo nulla non
          tempus. Ut vel volutpat quam. Nullam elementum ligula urna, eu rutrum
          neque viverra sed. Nunc id velit dapibus, rhoncus enim a, pretium
          enim. Proin iaculis, velit eget ullamcorper eleifend, sem mauris
          pellentesque metus, quis dapibus sem massa eu mi. Ut enim turpis,
          vestibulum interdum augue id, faucibus dignissim leo. Ut libero
          lectus, posuere eget consectetur at, imperdiet eget nibh. Maecenas
          magna neque, ullamcorper nec rhoncus ut, viverra at sem. Donec
          iaculis, dolor at bibendum dapibus, risus mauris egestas enim,
          consequat pharetra odio turpis sed mauris. Etiam commodo purus id
          egestas tincidunt. Aenean sed sollicitudin velit.
        </div>
      </div>
    </>
  );
};

export default BackgroundPanel;
