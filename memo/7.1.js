const organization = {name : '애크미 구스베리', country : 'GB'};

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  ...
}

const organization = {name : '애크미 구스베리', country : 'GB'};

result = `<h1>${organization.name}</h1>` // 읽기

organization.name = newName; // 쓰기

function getRawDataOfOrganization() {
  return organization;
}

result = `<h1>${getRawDataOfOrganization().name}</h1>` // 읽기

getRawDataOfOrganization().name = newName; // 쓰기

class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Organization({name : '애크미 구스베리', country : 'GB'});

function getRawDataOfOrganization() {
  return organization._data;
}

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {
    this._data.name = aString;
  }

  get name() {
    return this._data.name;
  }
}

// 클라이언트
getOrganization().name = newName;

result = `<h1>${getOrganization().name}</h1>`;


class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString) {
    this._name = aString;
  }

  get name() {
    return this._name;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }

  get country() {
    return this._country;
  }
}

'1920' : {
  name : '마틴 파울러',
  id : '1920',
  usages : {
    '2016' : {
      '1': 50,
      '2' : 50
    }
  }
}

// 쓰기
customerData[customerId].usages[year][month] = amount;

// 읽기
function compareUsage(customerId, laterYear, month) {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];

  return {laterAmount : later, change : later - earlier};
}

function getRawDataOfCustomers() {
  return customerData;
}

function setRawDataOfCustomers(arg) {
  customerData = arg;
}

// 쓰기
getRawDataOfCustomers()[customerId].usages[year][month] = amount;

// 읽기
function compareUsage(customerId, laterYear, month) {
  const later = getRawDataOfCustomers()[customerId].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerId].usages[laterYear - 1][month];

  return {laterAmount : later, change : later - earlier};
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData._data;;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

function setUsage(customerId, year, month, amount) {
  getRawDataOfCustomers()[customerId].usages[year][month] = amount;
}

setUsage(customerId, year, month, amount);


class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }
}

getCustomerData().setUsage(customerId, year, month, amount);


class CustomerData {
  constructor(data) {
    this._data = data;
  }

  usage(customerId, year, month) {
    return this._data[customerId].usages[year][month];
  }
}




// 읽기
function compareUsage(customerId, laterYear, month) {
  const later = getCustomerData().usage(customerId, laterYear, month);
  const earlier = getCustomerData().usage(customerId, laterYear - 1, month)

  return {laterAmount : later, change : later - earlier};
}