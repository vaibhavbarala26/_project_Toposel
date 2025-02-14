const { body, validationResult } = require('express-validator');

const registerValidation = [
  body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').trim().isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
  body('dateOfBirth').isISO8601().withMessage('Invalid date format'),
  body('country').trim().notEmpty().withMessage('Country is required'),
];

const loginValidation = [
  body('email').trim().isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
  validate,
};