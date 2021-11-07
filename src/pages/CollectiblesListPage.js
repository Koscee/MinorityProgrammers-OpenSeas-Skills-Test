import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCollectibles } from "../api/actions/collectibleActions";
import { getCollection } from "../api/actions/collectionActions";
import Banner from "../components/Banner/Banner";
import CollectibleList from "../components/CollectibleList";

const CollectiblesListPage = () => {
  const [collectibles, setCollectibles] = useState([]);
  const [collection, setCollection] = useState({
    title: "",
    bannerImage: "",
    description: "",
  });

  const { slug: collectionSlug } = useParams();

  const fetchData = async () => {
    const listOfCollectibles = await getCollectibles(collectionSlug);

    console.log("fetched list of collectibles", listOfCollectibles);

    const { name, banner_image_url, description } = await getCollection(
      collectionSlug
    );

    setCollectibles(listOfCollectibles);
    setCollection({
      title: name,
      bannerImage: banner_image_url,
      description: description,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Banner
        title={collection.title}
        description={collection.description}
        bkgImage={collection.bannerImage}
      />
      <main>
        <CollectibleList collectibles={collectibles} />
      </main>
    </div>
  );
};

export default CollectiblesListPage;
