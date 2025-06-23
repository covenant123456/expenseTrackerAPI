const incomeService = require('./income.service');

exports.createIncome = async (req, res) => {
  const income = await incomeService.createIncome(req.user._id, req.validated);
  res.status(201).json({ income });
};

exports.getAllIncomes = async (req, res) => {
  const incomes = await incomeService.getAllIncomes(req.user._id);
  res.json({ incomes });
};

exports.getIncomeById = async (req, res) => {
  const income = await incomeService.getIncomeById(req.params.id, req.user._id);
  if (!income) return res.status(404).json({ message: 'Income not found' });
  res.json({ income });
};

exports.updateIncome = async (req, res) => {
  const updated = await incomeService.updateIncome(req.params.id, req.user._id, req.validated);
  if (!updated) return res.status(404).json({ message: 'Income not found' });
  res.json({ income: updated });
};

exports.deleteIncome = async (req, res) => {
  const deleted = await incomeService.deleteIncome(req.params.id, req.user._id);
  if (!deleted) return res.status(404).json({ message: 'Income not found' });
  res.status(204).send();
};
