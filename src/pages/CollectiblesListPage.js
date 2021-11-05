import React, { Component } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SegmentWrapper from "../components/Segment/SegmentWrapper";
import SegmentHead from "../components/Segment/SegmentHead";
import { VerticalCard } from "../components/Card/Card";

export default class CollectiblesListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner
          title="MusicHeroes"
          description="Verified NFT marketplace for music artists."
        />
        <main>
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
