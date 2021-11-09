export const filterCollectibleData = (collectible) => {
  const ETH_DECIMAL = Math.pow(10, 18);
  let order = {
    base_price: 0,
    current_price: 0,
    expiration_time: null,
    closing_date: null,
  };

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
      orders = [order];
    } else {
      order.base_price = orders[0].base_price;
      order.current_price = orders[0].current_price;
      order.expiration_time = orders[0].expiration_time;
      order.closing_date = orders[0].closing_date;
    }
  } else {
    order.base_price = sell_orders[0].base_price;
    order.current_price = sell_orders[0].current_price;
    order.expiration_time = sell_orders[0].expiration_time;
    order.closing_date = sell_orders[0].closing_date;
  }

  const { base_price, current_price, expiration_time, closing_date } = order;

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
