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