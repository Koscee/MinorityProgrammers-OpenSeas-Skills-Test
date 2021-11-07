import React, { Component } from "react";
import Banner from "../components/Banner/Banner";
import CollectibleDetail from "../components/CollectibleDetail";
import Header from "../components/Header/Header";
import SegmentWrapper from "../components/Segment/SegmentWrapper";
import CollectibleList from "../components/CollectibleList";
import {
  getCollectible,
  getCollectibles,
} from "../api/actions/collectibleActions";
import { filterCollectibleData } from "../components/filterCollectibleData";

export default class CollectibleInfoPage extends Component {
  state = { collectibleInfo: {}, collectibles: [] };

  asset = {
    address: "0xc2d6b32e533e7a8da404abb13790a5a2f606ad75",
    tokenId: "53",
  };

  collectionSlug = "shiny-rappers";

  async componentDidMount() {
    let collectibleDetail = await getCollectible(
      this.asset.address,
      this.asset.tokenId
    );
    collectibleDetail = filterCollectibleData(collectibleDetail);
    console.log(collectibleDetail);

    const listOfCollectibles = await getCollectibles(collectibleDetail.slug);
    console.log("fetched list of collectibles", listOfCollectibles);

    this.setState({
      collectibleInfo: collectibleDetail,
      collectibles: listOfCollectibles,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Banner
          title={this.state.collectibleInfo.name}
          description={this.state.collectibleInfo.collection_name}
          bkgImage={this.state.collectibleInfo.image_url}
        />
        <main>
          <SegmentWrapper>
            {JSON.stringify(this.state.collectibleInfo) === "{}" ? (
              "Loading Details..."
            ) : (
              <CollectibleDetail dataInfo={this.state.collectibleInfo} />
            )}
          </SegmentWrapper>

          <CollectibleList collectibles={this.state.collectibles} />
        </main>
      </div>
    );
  }
}
