import React, { Component } from "react";

export default class BiddingForm extends Component {
  render() {
    return (
      <div className="bidding-form-box">
        <form className="bidding-form" action="" method="post">
          <div className="bid-price-input">
            <span>$</span>
            <input
              type="number"
              name="bidPrice"
              id="bid-price"
              placeholder="1,018.11"
            />
          </div>
          <button type="submit">Place Bid</button>
        </form>
      </div>
    );
  }
}
