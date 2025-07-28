const mongoose = require('mongoose');

const userFinanceProfileSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  income: {
    type: Number,
    default: 0,
    required: true,
  },
  rentExpense: {
    type: Number,
    default: 0,
    required: true,
  },
  emisExpense: {
    type: Number,
    default: 0,
    required: true,
  },
  subscriptionExpense: {
    type: Number,
    default: 0,
    required: true,
  },
  categoryBudgets: {
    food: {
      type: Number,
      default: 0,
      required: true
    },
    transport: {
      type: Number,
      default: 0,
      required: true
    },
    entertainment: {
      type: Number,
      default: 0,
      required: true
    },
    education: {
      type: Number,
      default: 0,
      required: true
    },
    travel: {
      type: Number,
      default: 0,
      required: true
    },
    shopping: {
      type: Number,
      default: 0,
      required: true
    },
    utilities: {
      type: Number,
      default: 0,
      required: true
    },
    others: {
      type: Number,
      default: 0,
      required: true
    }
  },
  savings: {
    type: Number,
    default: 0,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('UserFinanceProfile', userFinanceProfileSchema);