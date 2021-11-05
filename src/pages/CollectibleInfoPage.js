import React, { Component } from "react";
import Banner from "../components/Banner/Banner";
import CollectibleDetail from "../components/CollectibleDetail";
import Header from "../components/Header/Header";
import SegmentWrapper from "../components/Segment/SegmentWrapper";
import SegmentHead from "../components/Segment/SegmentHead";
import { HorizontalCard, VerticalCard } from "../components/Card/Card";

export default class CollectibleInfoPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner title="Muddy Waters" description="MusicHeroes collection" />
        <main>
          <SegmentWrapper>
            <CollectibleDetail />
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
