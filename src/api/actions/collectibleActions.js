import opensea from "../opensea";

const collectionName = "music-heroes";

export const getCollectionAssets = async (collectionSlug) => {
  const res = await opensea.get("/assets", {
    params: { collection: collectionSlug, limit: 10 },
  });

  return res.data;
};
