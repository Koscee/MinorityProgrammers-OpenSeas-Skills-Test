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
  const params = useParams();
  // console.log(params.tokenId);

  const [pageInfo, setPageInfo] = useState({
    collectible: {},
    collectibles: [],
  });

  const fetchData = async () => {
    const { assetAddress, tokenId } = params;
    let collectibleDetail = await getCollectible(assetAddress, tokenId);
    collectibleDetail = filterCollectibleData(collectibleDetail);
    // console.log(collectibleDetail);

    const listOfCollectibles = await getCollectibles(collectibleDetail.slug);
    console.log("fetched list of collectibles", listOfCollectibles);

    setPageInfo({
      collectible: collectibleDetail,
      collectibles: listOfCollectibles,
    });
  };

  useEffect(() => {
    fetchData().then(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [params.tokenId]);

  return (
    <div>
      <Banner
        title={pageInfo.collectible.name}
        description={pageInfo.collectible.collection_name}
        bkgImage={pageInfo.collectible.image_url}
      />
      <main>
        <SegmentWrapper>
          {JSON.stringify(pageInfo.collectible) === "{}" ? (
            "Loading Details..."
          ) : (
            <CollectibleDetail dataInfo={pageInfo.collectible} />
          )}
        </SegmentWrapper>

        <CollectibleList
          segmentTitle={`From ${
            pageInfo.collectible.collection_name || "..."
          } Collection`}
          collectibles={pageInfo.collectibles}
        />
      </main>
    </div>
  );
};

export default CollectibleInfoPage;
