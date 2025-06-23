const Expense = require('./expense.model');

exports.createExpense = async (userId, data) => {
  return await Expense.create({ ...data, user: userId });
};

exports.getAllExpenses = async (userId) => {
  return await Expense.find({ user: userId }).sort({ date: -1 });
};

exports.getExpenseById = async (id, userId) => {
  return await Expense.findOne({ _id: id, user: userId });
};

exports.updateExpense = async (id, userId, data) => {
  return await Expense.findOneAndUpdate({ _id: id, user: userId }, data, { new: true });
};

exports.deleteExpense = async (id, userId) => {
  return await Expense.findOneAndDelete({ _id: id, user: userId });
};
