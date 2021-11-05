import React, { Component } from "react";

export default class CardContent extends Component {
  render() {
    return (
      <div className={`${this.props.cardType}-card-content-box`}>
        {this.props.children}
      </div>
    );
  }
}
