const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

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
  res.send("POSTED")
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})


