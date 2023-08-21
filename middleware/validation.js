const { check } = require('express-validator');

exports.registerValidationRules = [
    check('name').trim().notEmpty().withMessage('User Name is required'),
    check('email').trim().isEmail().withMessage('Invalid email ID'),
    check('password').trim().notEmpty().withMessage('password is required'),
    check('confirmPassword').trim().notEmpty().withMessage('Confirm password is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    check('confirmPassword')
        .custom((value, { req }) => (value == req.body.password))
        .withMessage('Password and confirm Password must be same.'),
];
