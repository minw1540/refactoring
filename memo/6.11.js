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
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price
}

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;
  const price = applyShipping(basePrice, shippingMethod, discount);

  return price;
}

// 두 번째 단계를 처리하는 함수
function applyShipping(basePrice, shippingMethod, discount) {
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
}


function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;
  const priceData = {}; // 중간 데이터 구조
  const price = applyShipping(priceData, basePrice, shippingMethod, discount);

  return price;
}

function applyShipping(priceData, basePrice, shippingMethod, discount) {
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
}

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;
  const priceData = {basePrice}; 
  const price = applyShipping(priceData, shippingMethod, quantity, discount);

  return price;
}

function applyShipping(priceData, shippingMethod, quantity, discount) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = quantity * shippingPerCase;
  const price = priceData.basePrice - discount + shippingCost;

  return price;
}

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;
  const priceData = {basePrice, quantity, discount}; 
  const price = applyShipping(priceData, shippingMethod);

  return price;
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;

  return price;
}


function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  const price = applyShipping(priceData, shippingMethod);

  return price;
}

// 첫 번째 단계를 처리 하는 함수
function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;

  return {basePrice, quantity, discount}; 
}

// 두 번째 단계를 처리 하는 함수
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;

  return price;
}

function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);

  return applyShipping(priceData, shippingMethod);
}

// 첫 번째 단계를 처리 하는 함수
function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold) * product.basePrice * product.discountRate;

  return {basePrice, quantity, discount}; 
}

// 두 번째 단계를 처리 하는 함수
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee :  shippingMethod.feePerCase);
  const shippingCost = priceData.quantity * shippingPerCase;

  return priceData.basePrice - priceData.discount + shippingCost;
}