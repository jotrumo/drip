const axios = require('axios');
const SunCalc = require('suncalc');

var refactorCoordinates = (pArray) => {
  let coordinates = {};
  for (let i = 0; i < pArray.length; i++) {
    pArray[i] = pArray[i].toString();
  }
  let long = pArray[0].split('.');
  let latt = pArray[1].split('.');

  if (long[1].length > 4) {
    long[1] = long[1].slice(0, 4);
  }

  if (latt[1].length > 4) {
    latt[1] = latt[1].slice(0, 4);
  }

  coordinates['latt'] = latt.join('.');
  coordinates['long'] = long.join('.');

  return coordinates;
}

var getForecast = (locArray) => {
  let schedule = {};

  let location = refactorCoordinates(locArray);
  return axios.get(`https://api.weather.gov/points/${location.latt},${location.long}/forecast`)
  .then(data =>  {
    // console.log(SunCalc.getTimes())
    let result = [];
    data.data.properties.periods.map(period => {
      if (period.name.indexOf('night') !== -1 || period.name.indexOf('Night') !== -1) {
        result.push(period)
      }
    })
    return result;
  })
}

module.exports = {
  refactorCoordinates: refactorCoordinates,
  getForecast: getForecast,
}
