require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('express-async-errors');
const routes = require('./app/routes');
const exceptionHandler = require('./app/middleware/exceptionHandler');
const mongoose = require('mongoose');
const mongoDbUrl = require('./config/database');
const sentryConfig = require('./config/sentry');
const Sentry = require('@sentry/node');

const app = express();

// Sentry.init({ dsn: sentryConfig });

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
});

app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
// app.use(Sentry.Handlers.errorHandler());
// app.use(exceptionHandler);

app.listen(3000);
