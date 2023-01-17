function base(aReading) {...}
function taxableCharge(aReading) {...}

function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);

  return aReading;
}

const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

function enrichReading(original) {
  const result = _.cloneDeep(original);

  return result;
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);


function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);

  return result;
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;


it('check reading unchanged', function() {
  const baseReading = {customer : 'ivan', quantity : 15, month : 5, year : 2017};
  const oracle = _.cloneDeep(baseReading);

  enrichReading(baseReading);

  assert.deepEqual(baseReading, oracle);
})


const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));

  return result;
}