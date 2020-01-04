import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'express-async-errors';
import routes from './app/routes';
import exceptionHandler from './app/middleware/exceptionHandler';
import mongoose from 'mongoose';
import mongoDbUrl from './config/database';
import sentryConfig from './config/sentry';
import Sentry from '@sentry/node';

const app = express();

// Sentry.init({ dsn: sentryConfig });

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
});

//app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
// app.use(Sentry.Handlers.errorHandler());
// app.use(exceptionHandler);

app.listen(3000);
