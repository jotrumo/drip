const axios = require('axios');
const SunCalc = require('suncalc');
const moment = require('moment');
const {getSunset} = require('sunrise-sunset-js');

//helpers needed for updating watering schedule
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

var utcToLocal = (pTime, pDiff) => {
  let dateArray = pTime.split('T')
  let time = dateArray[1]
  let timeArray = time.split(':')
  let hour = parseInt(timeArray[0])
  let diff = pDiff.split(':')
  let diffInt = parseInt(diff[0])
  console.log(hour, diffInt)
  let newHour = hour - (diffInt + 1)
  timeArray[0] = newHour
  let result = `${dateArray[0].split('"').pop()} ${timeArray.join(':')} AM `
  return result;
}

var getForecast = (locArray) => {
  let schedule = {};
  let date = new Date();
  let utcDiff;

  let location = refactorCoordinates(locArray);
  return axios.get(`https://api.weather.gov/points/${location.latt},${location.long}/forecast`)
  .then(data =>  {
    // console.log(SunCalc.getTimes())
    let result = [];
    utcFormat = JSON.stringify(data.data.properties.periods[0].startTime);

    data.data.properties.periods.map((period, index) => {
      if (period.name.indexOf('night') !== -1 || period.name.indexOf('Night') !== -1) {
        let forecast = {};
        forecast['name'] = period.name;
        forecast['temperature'] = period.temperature
        forecast['duration'] = 0
        forecast['icon'] = period.icon
        forecast['detailed'] = period.detailedForecast
        result.push(forecast)
        count = result.length;
      }
    })
    return result;
  })
  .then(data => {
    console.log("UTC", utcFormat)
    let date = new Date();
    let forecast = data
    let utcRaw= utcFormat.split('-')
    let utcDiff = utcRaw.pop()

    console.log(utcDiff)
    for (let i = 0; i < forecast.length; i++) {
      let sunStats = SunCalc.getTimes(date.setDate(date.getDate() + 1), location.latt, location.long)
      let sunriseRaw = JSON.stringify(sunStats.sunrise).split('.')
      let sunrise = sunriseRaw.shift()
      forecast[i]['id'] = i;
      forecast[i]['start'] = utcToLocal(sunrise, utcDiff)
    }
    return forecast

  })
}

var getSchedule = (pForecast, pEvents) => {
  let count = 0;
  console.log(pForecast, pEvents)
  let schedule = pForecast

  if (pEvents === '2') {
    for (let i = 0; i < schedule.length; i = i + 5) {
      schedule[i].duration = 30
    }
  }
  if (pEvents === '3') {
    for (let i = 0; i <= schedule.length - 1; i = i + 3) {
      schedule[i].duration = 20
    }
  }
  if (pEvents === '4') {
    for (let i = 0; i < schedule.length; i = i + 2) {
      schedule[i].duration = 15
    }
  }

  return schedule
}

//helpers needed for user authentication

module.exports = {
  refactorCoordinates: refactorCoordinates,
  getForecast: getForecast,
  getSchedule: getSchedule,
}
