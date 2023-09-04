const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  // 1.  Create a user, set active to false until the user verify the email.

  // 2. Send a mail for email verification and update active state upon email verification
  res.status(201).json({
    message: 'sucess',
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(201).json({
    message: 'sucess',
  });
});
