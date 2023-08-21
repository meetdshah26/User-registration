const express = require('express');
const upload = require('../middleware/multer');
const authController = require('../controller/user');
const {registerValidationRules} = require('../middleware/validation');
const router = express.Router();

router.post('/register', upload.single('profile'), registerValidationRules, authController.registerUser);

module.exports = router;