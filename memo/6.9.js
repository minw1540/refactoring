function base(aReading) {...}
function taxableCharge(aReading) {...}
function calculateBaseCharge(aReading) {...}

class Reading {
  base(){...}
  taxableCharge() {...}
  calculateBaseCharge() {...}
}


const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base)



const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));




const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

/**
 * [기본 요금 계산 함수]
 * 1번 클라이언트, 2번 클라이언트에 공통된 계산식 존재
 */
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get customer() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }
}



const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);


class Reading {
  constructor(data) {...}
  
  //사전에 만든 getter 들...

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year))
  }
}


const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.calculateBaseCharge();

function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year))
}
