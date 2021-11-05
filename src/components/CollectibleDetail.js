import React, { Component } from "react";
import BiddingForm from "./BiddingForm";
import DetailItem from "./DetailItem";
import './collectionDetail.css'

export default class CollectibleDetail extends Component {
  render() {
    return (
      <div className="info-container">
        <div className="info-left-box">
          <div className="info-left-heading">
            <p className="collection-name">MusicHeros collection</p>
            <h3 className="collectible-name">Muddy Waters</h3>
          </div>
          <div className="info-left-img-box">
            <img
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="collectible-image"
            />
          </div>
          <div className="info-left-bottom">
            <div className="tag-container">
              <h3 className="tag-text">Tags</h3>
              <div className="tag-list">
                <span className="tag-item">Hip Hop</span>
                <span className="tag-item">Afrobeat</span>
                <span className="tag-item">Rapper</span>
                <span className="tag-item">Solo</span>
                <span className="tag-item">Blues</span>
              </div>
            </div>
            <div className="edition-box">
              <h4 className="edition-text">Edition</h4>
              <span className="edition-range">1 of 1017</span>
            </div>
          </div>
        </div>

        <div className="info-right-box">
          <div className="bidding-info">
            <div className="bidding-info-left">
              <div className="current-bid-box">
                <p className="font2">Current Bid</p>
                <span className="current-bid-value font5">$1,017.17</span>
              </div>
              <div className="starting-bid-box">
                <p className="font2">Starting Bid</p>
                <span className="starting-bid-value font5">$1.07</span>
              </div>
            </div>

            <div className="bidding-info-right">
              <p className="bid-end-text">Bid Ends in</p>
              <span className="bid-end-date">12d 3h 3m 2s</span>
            </div>
          </div>

          <BiddingForm />

          <div className="collectible-desc-details">
            <div className="description-box">
              <h4 className="heading-text">Description</h4>
              <p className="description-content">
                This chain represents young thug's solidarity with his friends
                growing up
              </p>
            </div>

            <div className="details-box">
              <h4 className="heading-text">Details</h4>
              <DetailItem name="Contract Address" value="0x1123" />
              <DetailItem name="TokenID" value="1" />
              <DetailItem name="Blockchain" value="Etherum" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
