import React, { Component } from "react";
import { getCollectibles } from "../api/actions/collectibleActions";
import { getCollection } from "../api/actions/collectionActions";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CollectibleList from "../components/CollectibleList";

export default class CollectiblesListPage extends Component {
  state = { collectibles: [], title: "", bannerImage: "", description: "" };

  collectionSlug = "shiny-rappers";

  async componentDidMount() {
    const listOfCollectibles = await getCollectibles(this.collectionSlug);

    console.log("fetched list of collectibles", listOfCollectibles);

    const { name, banner_image_url, description } = await getCollection(
      this.collectionSlug
    );

    this.setState({
      collectibles: listOfCollectibles,
      title: name,
      bannerImage: banner_image_url,
      description: description,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Banner
          title={this.state.title}
          description={this.state.description}
          bkgImage={this.state.bannerImage}
        />
        <main>
          <CollectibleList collectibles={this.state.collectibles} />
        </main>
      </div>
    );
  }
}
