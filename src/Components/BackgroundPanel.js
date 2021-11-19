import { Component } from "react";

import "./BackgroundPanel.css";

class BackgroundPanel extends Component {
  render() {
    let side = this.props.side;
    side = "split backpanel" + side.trim();

    return <div className={side}></div>;
  }
}
export default BackgroundPanel;
