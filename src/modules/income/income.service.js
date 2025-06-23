const Income = require('./income.model');

exports.createIncome = async (userId, data) => {
  return await Income.create({ ...data, user: userId });
};

exports.getAllIncomes = async (userId) => {
  return await Income.find({ user: userId }).sort({ date: -1 });
};

exports.getIncomeById = async (id, userId) => {
  return await Income.findOne({ _id: id, user: userId });
};

exports.updateIncome = async (id, userId, data) => {
  return await Income.findOneAndUpdate({ _id: id, user: userId }, data, { new: true });
};

exports.deleteIncome = async (id, userId) => {
  return await Income.findOneAndDelete({ _id: id, user: userId });
};
