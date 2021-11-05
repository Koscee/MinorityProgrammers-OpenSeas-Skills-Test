import React, { Component } from "react";

export default class DetailItem extends Component {
  render() {
    return (
      <div className="detail-item">
        <p className="detail-item-key">{this.props.name}</p>
        <p className="detail-item-value">{this.props.value}</p>
      </div>
    );
  }
}
