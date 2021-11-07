import React, { Component } from "react";
import { Link } from "react-router-dom";
import SegmentWrapper from "./Segment/SegmentWrapper";
import SegmentHead from "./Segment/SegmentHead";
import { VerticalCard } from "./Card/Card";
import { filterCollectibleData } from "./filterCollectibleData";

class CollectibleList extends Component {
  renderCollectibleCards = () => {
    const collectibles = this.props.collectibles;

    return collectibles.length === 0
      ? " "
      : collectibles.map((collectible) => {
          collectible = filterCollectibleData(collectible);

          console.log(collectible);

          return (
            <Link
              to={`/collectible/${collectible.address}/${collectible.token_id}`}
              key={collectible.id}
              onClick={() =>
                window.location.href(
                  `/collectible/${collectible.address}/${collectible.token_id}`
                )
              }
            >
              <VerticalCard
                name={collectible.name}
                avatarImage={collectible.image_url}
                author={collectible.author}
                price={"$" + collectible.current_price}
                footerLTitle="Drops in"
                footerLValue={collectible.expiration_time || "N/A"}
                footerRTitle="Mint Amount"
                footerRValue={collectible.num_sales}
              />
            </Link>
          );
        });
  };

  render() {
    return (
      <SegmentWrapper>
        <SegmentHead title={this.props.segmentTitle || "Collectibles"} />
        <hr />
        <div className="segment-content">{this.renderCollectibleCards()}</div>
      </SegmentWrapper>
    );
  }
}

CollectibleList.defaultProps = {
  collectibles: [],
};

export default CollectibleList;
