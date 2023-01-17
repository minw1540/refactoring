const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split('-')[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);

  return ({
    productId : values[0].split('-')[1],
    quantity : parseInt(values[1])
  })
}

function price(order, priceList) {
  return order.quantity * priceList[order.productId];
}


function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
}