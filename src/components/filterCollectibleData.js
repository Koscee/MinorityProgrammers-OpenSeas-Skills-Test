export const filterCollectibleData = (collectible) => {
  const ETH_DECIMAL = Math.pow(10, 18);

  const {
    id,
    token_id,
    name,
    image_url,
    description,
    collection: { name: collection_name, slug },
    asset_contract: { address, schema_name },
    creator: {
      user: { username: author },
    },
    num_sales,
    sell_orders,
  } = collectible;

  const { base_price, current_price, expiration_time, closing_date } =
    sell_orders ? sell_orders[0] : {};
  // closing_date,
  //   expiration_time,
  //   base_price,
  //   current_price,
  //   quantity,

  return {
    id,
    token_id,
    name,
    collection_name,
    slug,
    image_url,
    description,
    address,
    schema_name,
    author,
    num_sales,
    base_price: !base_price ? "N/A" : (base_price / ETH_DECIMAL).toFixed(2),
    current_price: !current_price
      ? "N/A"
      : (current_price / ETH_DECIMAL).toFixed(2),
    expiration_time,
    closing_date,
  };
};
