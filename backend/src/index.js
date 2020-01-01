const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const mongoose = require('mongoose');
const mongoDbUrl = require('./config/database');
const app = express();

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(3000);
