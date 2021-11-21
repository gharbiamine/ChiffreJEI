import { Component } from "react";

import styles from "../Panel.module.css";

class BackgroundPanel extends Component {
  render() {
    let side = this.props.side;
    side = "split backpanel" + side.trim();

    return <div className={side}></div>;
  }
}
export default BackgroundPanel;
