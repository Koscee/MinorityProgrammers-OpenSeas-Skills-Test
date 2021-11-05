import React, { Component } from "react";

class CardFooter extends Component {
  render() {
    return (
      <div className={`${this.props.cardType}-card-footer-container`}>
        <div className="footer-left">
          <p>Drops in</p>
          <span className="footer-left-value">2d 1h 23m 1s</span>
        </div>
        <div className="footer-right">
          <p>Mint Amount</p>
          <span className="footer-right-value">100,000</span>
        </div>
      </div>
    );
  }
}

export default CardFooter;
