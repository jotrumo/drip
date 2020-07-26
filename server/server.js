const express = require('express');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const method = require('./helpers/methods.js');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));

router.get('/', (req, res) => {
  res.send("MVP is alive...")
})

router.post('/newSchedule', (req, res) => {
  console.log(req.body)
  axios.get(`https://geocode.xyz/${req.body.city},${req.body.state}?json=1`)
  .then(loc => method.modifyCoordinates(loc.data.longt, loc.data.latt))
  .then(data => method.getForecast(data))
  
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})


