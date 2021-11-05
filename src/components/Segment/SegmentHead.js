import React, { Component } from "react";

class SegmentHead extends Component {
  render() {
    return (
      <div className="segment-head">
        <div className="segment-head-title">
          <h3>{this.props.title}</h3>
        </div>

        {this.props.children}

        <div className="segment-head-button">View All</div>
      </div>
    );
  }
}

export default SegmentHead;
