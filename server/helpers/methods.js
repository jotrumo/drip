const axios = require('axios');

var modifyCoordinates = (pLatt, pLong) => {
  let coordinates = {};
  let latt = pLatt.split('.');
  let long = pLong.split('.');

  if (latt[1].length > 4) {
    latt[1] = latt[1].slice(0, 4);
  }

  if (long[1].length > 4) {
    long[1] = long[1].slice(0, 4);
  }

  coordinates['latt'] = latt.join('.');
  coordinates['long'] = long.join('.');

  console.log(coordinates)
  return coordinates;
}

var getForecast = (loc) => {
  console.log(loc)

}

module.exports = {
  modifyCoordinates: modifyCoordinates,
  getForecast: getForecast,
}
