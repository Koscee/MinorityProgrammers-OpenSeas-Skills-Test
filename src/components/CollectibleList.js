import React, { Component } from "react";
import { Link } from "react-router-dom";
import SegmentWrapper from "./Segment/SegmentWrapper";
import SegmentHead from "./Segment/SegmentHead";
import { VerticalCard } from "./Card/Card";
import { filterCollectibleData } from "./filterCollectibleData";
import TimerCountDown from "./TimerCountDown";

class CollectibleList extends Component {
  renderCollectibleCards = () => {
    const collectibles = this.props.collectibles;

    return collectibles.length === 0
      ? " "
      : collectibles.map((collectible) => {
          collectible = filterCollectibleData(collectible);

          const href = `/collectible/${collectible.address}/${collectible.token_id}`;

          // console.log(collectible);

          return (
            <Link to={href} key={collectible.id}>
              <VerticalCard
                name={collectible.name}
                avatarImage={collectible.image_url}
                author={collectible.author}
                price={"$" + collectible.current_price}
                footerLTitle="Drops in"
                footerLValue={
                  !collectible.closing_date ? (
                    "N/A"
                  ) : (
                    <TimerCountDown endDate={collectible.closing_date} />
                  )
                }
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
