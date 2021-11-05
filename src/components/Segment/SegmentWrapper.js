import React, { Component } from "react";
import "./segment.css";

class SegmentWrapper extends Component {
  render() {
    return <div className="segment">{this.props.children}</div>;
  }
}

export default SegmentWrapper;
