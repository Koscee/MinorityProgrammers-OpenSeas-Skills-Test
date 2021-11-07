import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CollectibleDetail from "../components/CollectibleDetail";
import SegmentWrapper from "../components/Segment/SegmentWrapper";
import CollectibleList from "../components/CollectibleList";
import {
  getCollectible,
  getCollectibles,
} from "../api/actions/collectibleActions";
import { filterCollectibleData } from "../components/filterCollectibleData";

const CollectibleInfoPage = () => {
  const [collectibleInfo, setCollectibleInfo] = useState({});
  const [collectibles, setCollectibles] = useState([]);

  const { assetAddress, tokenId } = useParams();

  const collectionSlug = "shiny-rappers";

  const fetchData = async () => {
    let collectibleDetail = await getCollectible(assetAddress, tokenId);
    collectibleDetail = filterCollectibleData(collectibleDetail);
    console.log(collectibleDetail);

    const listOfCollectibles = await getCollectibles(collectibleDetail.slug);
    console.log("fetched list of collectibles", listOfCollectibles);

    setCollectibleInfo(collectibleDetail);
    setCollectibles(listOfCollectibles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Banner
        title={collectibleInfo.name}
        description={collectibleInfo.collection_name}
        bkgImage={collectibleInfo.image_url}
      />
      <main>
        <SegmentWrapper>
          {JSON.stringify(collectibleInfo) === "{}" ? (
            "Loading Details..."
          ) : (
            <CollectibleDetail dataInfo={collectibleInfo} />
          )}
        </SegmentWrapper>

        <CollectibleList
          segmentTitle={`From ${collectibleInfo.collection_name} Collection`}
          collectibles={collectibles}
        />
      </main>
    </div>
  );
};

export default CollectibleInfoPage;
