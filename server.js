/* eslint-disable no-console */
require('dotenv').config();

const app = require('./app');
const connectDB = require('./db/connect');

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    const server = app.listen(port, () => {
      console.log(`App running on port:  ${port}`);
    });

    await connectDB(process.env.DATABASE);

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
