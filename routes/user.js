const express = require('express')

const router = express.Router();

const userController = require('../controllers/user.js');

// const authController = require('../middleware/auth.js');

router.post('/signup', userController.signup)

router.post('/login', userController.login)

module.exports = router;