const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('DB connection succesfully');
  } catch (error) {
    console.log('Could not connect to db');
  }
};

module.exports = connectDB;
