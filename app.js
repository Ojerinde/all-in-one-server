const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');

// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./graphql/user/userSchema');

// // RouteHandler
const authRouter = require('./routes/authRoutes');

// // Utils
const AppError = require('./utils/appError');
const GlobalErrorHandler = require('./controllers/errorController');

// // Creating an express app
const app = express();

// /////// Global middlewares ///
app.use(morgan('dev'));

// Set security HTTP header
app.use(helmet());

// Data sanitization against XSS: malicious html using Javascript
app.use(xss());

// Limit request from the same Ip to the api routes
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour!',
});

app.use('/api', limiter);

// Body parser from the request. reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Test middleware
app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Request from', req.originalUrl);
  next();
});

// graphql only has one url: here we will see the grapiql UI

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development',
//   }),
// );

app.use('/api/v1/auth', authRouter);

// // Invalid routes handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// This handles app wide error
app.use(GlobalErrorHandler);

module.exports = app;
