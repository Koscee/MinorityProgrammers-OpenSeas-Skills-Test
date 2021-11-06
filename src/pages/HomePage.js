import React, { Component } from "react";
import { getTopCollections } from "../api/actions/collectionActions";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SegmentWrapper from "../components/Segment/SegmentWrapper";
import SegmentHead from "../components/Segment/SegmentHead";
import { HorizontalCard, VerticalCard } from "../components/Card/Card";
import CollectibleInfoPage from "./CollectibleInfoPage";

export default class HomePage extends Component {
  state = { collectibles: [], topCollectionsData: [] };

  async componentDidMount() {
    const topCollections = await getTopCollections();
    this.setState({ topCollectionsData: topCollections });
    console.log("fetched top collections", this.state.topCollectionsData);
  }

  renderTopCollectionsCards = () => {
    return this.state.topCollectionsData.length === 0
      ? "Loading..."
      : this.state.topCollectionsData.map((collection) => {
          return (
            <HorizontalCard
              key={collection.slug}
              name={collection.name}
              avatarImage={collection.image_url}
              footerLTitle="Floor Price"
              footerLValue={collection.floor_price.toFixed(2)}
              footerRTitle="Volume"
              footerRValue={collection.total_volume.toFixed(2)}
            />
          );
        });
  };

  render() {
    return (
      <div>
        <Header />
        <Banner
          title="Collectibles"
          description="Verified NFT marketplace for music artists."
        />
        <main>
          <SegmentWrapper>
            <SegmentHead title="Top Collections" />
            <hr />
            <div className="segment-content">
              {this.renderTopCollectionsCards()}
            </div>
          </SegmentWrapper>

          <SegmentWrapper>
            <SegmentHead title="Collectibles" />
            <hr />
            <div className="segment-content">
              <VerticalCard />
              <VerticalCard />
              <VerticalCard />
              <VerticalCard />
              <VerticalCard />
              <VerticalCard />
            </div>
          </SegmentWrapper>
        </main>
      </div>
    );
  }
}
