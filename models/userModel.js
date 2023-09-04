const mongoose = require('mongoose');
const validator = require('validator');
const { isPasswordValid } = require('../utils/validators');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Email is not valid'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    min: [8, 'MinLength should be 8'],
    validate: {
      validator: function () {
        return isPasswordValid(this.password); // False triggers an error
      },
      message: 'Password in invalid',
    },
    select: false, // This doesn't work on create and save
  },
  confirmPassword: {
    type: String,
    required: [true, 'Password is required'],
    validate: {
      // Custom validator. works on save and create.
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords does not match',
    },
  },
  // passwordChangedAt: Date,
  // passwordResetToken: String,
  // passwordResetExpires: String,
  // active: {
  //   type: Boolean,
  //   default: true,
  //   select: false,
  // },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
