import React, { Component } from "react";
import { getTopCollections } from "../api/actions/collectionActions";
import { getCollectibles } from "../api/actions/collectibleActions";
import Banner from "../components/Banner/Banner";
import CollectibleList from "../components/CollectibleList";
import TopCollections from "../components/TopCollections";

export default class HomePage extends Component {
  state = { collectibles: [], topCollectionsData: [] };

  async componentDidMount() {
    const topCollections = await getTopCollections();
    console.log("fetched top collections", this.state.topCollectionsData);

    const listOfCollectibles = await getCollectibles();
    console.log("fetched list of collectibles", listOfCollectibles);

    this.setState({
      collectibles: listOfCollectibles,
      topCollectionsData: topCollections,
    });
  }

  render() {
    return (
      <div>
        <Banner
          title="Collectibles"
          description="Verified NFT marketplace for music artists."
          bkgImage="images/banner.jpg"
        />
        <main>
          <TopCollections topCollections={this.state.topCollectionsData} />
          <CollectibleList collectibles={this.state.collectibles} />
        </main>
      </div>
    );
  }
}
