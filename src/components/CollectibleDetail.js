import React, { Component } from "react";
import BiddingForm from "./BiddingForm";
import DetailItem from "./DetailItem";
import "./collectionDetail.css";

export default class CollectibleDetail extends Component {
  render() {
    const collectible = this.props.dataInfo;
    return (
      <div className="info-container">
        <div className="info-left-box">
          <div className="info-left-heading">
            <p className="collection-name">{collectible.collection_name}</p>
            <h3 className="collectible-name">{collectible.name}</h3>
          </div>
          <div className="info-left-img-box">
            <img src={collectible.image_url} alt={collectible.name} />
          </div>
          <div className="info-left-bottom">
            <div className="tag-container">
              <h3 className="tag-text">Tags</h3>
              <div className="tag-list">
                {/* <span className="tag-item">N/A</span> */}
              </div>
            </div>
            <div className="edition-box">
              <h4 className="edition-text">Edition</h4>
              <span className="edition-range">N/A</span>
            </div>
          </div>
        </div>

        <div className="info-right-box">
          <div className="bidding-info">
            <div className="bidding-info-left">
              <div className="current-bid-box">
                <p className="font2">Current Bid</p>
                <span className="current-bid-value font5">
                  ${collectible.current_price || "N/A"}
                </span>
              </div>
              <div className="starting-bid-box">
                <p className="font2">Starting Bid</p>
                <span className="starting-bid-value font5">
                  ${collectible.base_price || "N/A"}
                </span>
              </div>
            </div>

            <div className="bidding-info-right">
              <p className="bid-end-text">Bid Ends in</p>
              <span className="bid-end-date">
                {collectible.closing_date || "N/A"}
              </span>
            </div>
          </div>

          <BiddingForm />

          <div className="collectible-desc-details">
            <div className="description-box">
              <h4 className="heading-text">Description</h4>
              <p className="description-content">{collectible.description}</p>
            </div>

            <div className="details-box">
              <h4 className="heading-text">Details</h4>
              <DetailItem
                name="Contract Address"
                value={
                  collectible.address.length > 16
                    ? collectible.address.slice(0, 16) + "***"
                    : collectible.address
                }
              />
              <DetailItem
                name="TokenID"
                value={
                  collectible.token_id.length > 10
                    ? collectible.token_id.slice(0, 10) + "***"
                    : collectible.token_id
                }
              />
              <DetailItem
                name="Blockchain"
                value={collectible.schema_name || "Etherum"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
