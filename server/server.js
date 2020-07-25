const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send("MVP is alive...")
})

router.post('/POST', (req, res) => {
  console.log(req.body);
  res.send("POSTED")
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})


