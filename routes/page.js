const express = require('express');

const router = express.Router();

// const authController = require('../controllers/auth')

const pageController = require('../controllers/page');

router.get('/', pageController.signup);