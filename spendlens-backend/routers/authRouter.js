const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController');

authRouter.post('/api/auth/login', authController.postLogin);
authRouter.post('/api/auth/signup', authController.postSignup);
authRouter.post('/api/auth/logout', authController.postLogout);

module.exports = authRouter;