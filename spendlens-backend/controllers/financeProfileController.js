const UserFinanceProfile = require('../models/UserFinanceProfile');

// exports.createFinanceProfile = (req, res, next) => {
//   const { userId, income, rentExpense, emisExpense, subscriptionExpense, categoryBudgets, savings } = req.body;

//   // Convert string values to numbers
//   const formattedData = {
//     userId: req.user._id, // Assuming you have user authentication middleware
//     income: Number(income),
//     rentExpense: Number(rentExpense),
//     emisExpense: Number(emisExpense),
//     subscriptionExpense: Number(subscriptionExpense),
//     savings: Number(savings),
//     categoryBudgets: {
//       food: Number(categoryBudgets.food),
//       transport: Number(categoryBudgets.transport),
//       shopping: Number(categoryBudgets.shopping),
//       education: Number(categoryBudgets.education),
//       entertainment: Number(categoryBudgets.entertainment),
//       utilities: Number(categoryBudgets.utilities),
//       travel: Number(categoryBudgets.travel),
//       others: Number(categoryBudgets.others)
//     }
//   };

//   const newFinanceProfile = new UserFinanceProfile(formattedData);

//   newFinanceProfile.save()
//     .then(result => {
//       res.status(201).json({
//         message: 'Finance profile created successfully',
//         financeProfile: result
//       });
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({
//         message: 'Error creating finance profile',
//         error: err.message
//       });
//     });
// };