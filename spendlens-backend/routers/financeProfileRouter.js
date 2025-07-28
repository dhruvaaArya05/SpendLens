const express = require('express');
const financeProfileRouter = express.Router();

const financeProfileController = require('../controllers/financeProfileController');
const { authenticateUser } = require('../middlewares/authUser');

financeProfileRouter.use(authenticateUser);

// financeProfileRouter.post('/api/finance-profile', financeProfileController.createFinanceProfile);

module.exports = financeProfileRouter;
