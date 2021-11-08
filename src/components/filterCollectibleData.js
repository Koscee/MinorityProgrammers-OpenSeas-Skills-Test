export const filterCollectibleData = (collectible) => {
  const ETH_DECIMAL = Math.pow(10, 18);

  let {
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
    orders,
  } = collectible;

  if (sell_orders === null) {
    if (orders === undefined || orders[0] === undefined) {
      const defaultOrders = [
        {
          base_price: 0,
          current_price: 0,
          expiration_time: null,
          closing_date: null,
        },
      ];
      var { base_price, current_price, expiration_time, closing_date } =
        defaultOrders[0];
    } else {
      var { base_price, current_price, expiration_time, closing_date } =
        orders[0];
    }
  } else {
    var { base_price, current_price, expiration_time, closing_date } =
      sell_orders[0];
  }

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
