import opensea from "../opensea";

const topCollectionsToDisplay = [
  "music-heroes",
  "shiny-rappers",
  "cryptohiphopcrew ",
];

export const getTopCollections = () => {
  console.log("fetching top collections from opensea api...");

  const dataList = topCollectionsToDisplay.map(async (collectionName) => {
    const res = await opensea.get(`/collection/${collectionName}`);
    const {
      name,
      slug,
      image_url,
      banner_image_url,
      stats: { floor_price, total_volume },
    } = res.data.collection;

    return {
      name,
      slug,
      image_url,
      banner_image_url,
      floor_price,
      total_volume,
    };
  });

  return Promise.all(dataList);
};

// test function
export const getCollection = async (collectionSlug) => {
  const res = await opensea.get(`/collection/${collectionSlug}`);

  const { name, banner_image_url, description } = res.data.collection;

  return { name, banner_image_url, description };
};
