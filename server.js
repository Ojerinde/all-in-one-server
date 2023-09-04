/* eslint-disable no-console */
require('dotenv').config();

const app = require('./app');
const connectDB = require('./db/connect');

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE);

    const server = app.listen(port, () => {
      console.log(`App running on port:  ${port}`);
    });
    process.on('unhandledRejection', (error) => {
      console.log(error);
      server.close(() => {
        process.exit(1);
      });
    });
  } catch {
    console.log('Fail to start application');
  }
};

start();
