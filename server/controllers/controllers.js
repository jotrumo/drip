const model = require('../../database/models/models.js');

// //gets the top 5 songs by listens
const getUser = ((pUname, pWord, callback) => {
  model.Flora.findAll({
    where: {
    type: pType,
    },
  })
  .then(data => callback(null, data))
  .catch(err => callback(err, null))
})

const getTrees = ((pType, callback) => {
  model.Flora.findAll({
    where: {
    type: pType,
    },
  })
  .then(data => callback(null, data))
  .catch(err => callback(err, null))
})

const getGrasses = ((pType, callback) => {
  model.Flora.findAll({
    where: {
    type: pType,
    },
  })
  .then(data => callback(null, data))
  .catch(err => callback(err, null))
})

const getShrubs = ((pType, callback) => {
  model.Flora.findAll({
    where: {
    type: pType,
    },
  })
  .then(data => callback(null, data))
  .catch(err => callback(err, null))
})

const getAllFlora = (callback) => {
  model.Flora.findAll({})
  .then(data => callback(null, data))
  .catch(err => callback(err, null))
}

module.exports = {
  getUser: getUser,
  getTrees: getTrees,
  getGrasses: getGrasses,
  getShrubs: getShrubs,
  getAllFlora: getAllFlora,
}

