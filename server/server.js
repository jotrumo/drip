const express = require('express');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const method = require('./helpers/methods.js');
const token = require('../token.config.js');
require('../database/index.js');
const controller = require('./controllers/controllers.js');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));

//routes
router.get('/flora', (req, res) => {
  controller.getAllFlora((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

router.post('/newSchedule', (req, res) => {
  console.log(req.body)
  axios.get(`https://api.geocodify.com/v2/geocode?api_key=${token.token}&q=${req.body.address}, ${req.body.city}, ${req.body.state}, USA`)
  .then(loc => {
    return method.getForecast(loc.data.response.bbox);
  })
  .then(forecast => {
    return method.getSchedule(forecast, req.body.events);
  })
  .then(schedule => res.send(schedule))
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})


