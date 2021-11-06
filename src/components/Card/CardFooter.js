import React, { Component } from "react";

class CardFooter extends Component {
  render() {
    const { cardType, leftTitle, leftValue, rightTitle, rightValue } =
      this.props;
    return (
      <div className={`${cardType}-card-footer-container`}>
        <div className="footer-left">
          <p>{leftTitle}</p>
          <span className="footer-left-value">${leftValue}</span>
        </div>
        <div className="footer-right">
          <p>{rightTitle}</p>
          <span className="footer-right-value">${rightValue}</span>
        </div>
      </div>
    );
  }
}

export default CardFooter;
