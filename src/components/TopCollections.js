import React, { Component } from "react";
import { Link } from "react-router-dom";
import SegmentWrapper from "./Segment/SegmentWrapper";
import SegmentHead from "./Segment/SegmentHead";
import { HorizontalCard } from "./Card/Card";

export default class TopCollections extends Component {
  renderTopCollectionsCards = () => {
    return this.props.topCollections.length === 0
      ? "Loading..."
      : this.props.topCollections.map((collection) => {
          return (
            <Link to={`/collection/${collection.slug}`} key={collection.slug}>
              <HorizontalCard
                name={collection.name}
                avatarImage={collection.image_url}
                footerLTitle="Floor Price"
                footerLValue={"$" + collection.floor_price.toFixed(2)}
                footerRTitle="Volume"
                footerRValue={"$" + collection.total_volume.toFixed(2)}
              />
            </Link>
          );
        });
  };

  render() {
    return (
      <SegmentWrapper>
        <SegmentHead title="Top Collections" />
        <hr />
        <div className="segment-content">
          {this.renderTopCollectionsCards()}
        </div>
      </SegmentWrapper>
    );
  }
}
