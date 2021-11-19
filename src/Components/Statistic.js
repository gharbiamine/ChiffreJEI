import "./App.css";
import CountUp from "react-countup";
import { Component } from "react";
// import { motion } from "framer-motion";

class Statistics extends Component {
  static defualtPropos = {
    start: 1,
    target: 100,
    duration: 1,
    delay: 0,
  };

  render() {
    return (
      <div className="stat">
        <CountUp
          start={this.props.start || Statistics.defualtPropos.start}
          end={this.props.end || Statistics.defualtPropos.end}
          delay={this.props.delay || Statistics.defualtPropos.delay}
          duration={this.props.duration || Statistics.defualtPropos.duration}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
    );
  }
}
export default Statistics;
