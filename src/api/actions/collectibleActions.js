import opensea from "../opensea";

// const collectionName = "music-heroes";

export const getCollectibles = async (collectionSlug = "") => {
  const res = await opensea.get("/assets", {
    params: {
      collection: collectionSlug,
      order_by: "sale_count",
      order_direction: "desc",
      offset: 0,
      limit: 10,
    },
  });

  return res.data.assets;
};

export const getCollectible = async (address, token_id) => {
  const res = await opensea.get(`/asset/${address}/${token_id}`);

  return res.data;
};
