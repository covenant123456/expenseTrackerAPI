const expenseService = require('./expense.service');

exports.createExpense = async (req, res) => {
  const expense = await expenseService.createExpense(req.user._id, req.validated);
  res.status(201).json({ expense });
};

exports.getAllExpenses = async (req, res) => {
  const expenses = await expenseService.getAllExpense(req.user._id);
  res.json({ expenses });
};

exports.getExpenseById = async (req, res) => {
  const expense = await expenseService.getExpenseById(req.params.id, req.user._id);
  if (!expense) return res.status(404).json({ message: 'Expense not found' });
  res.json({ expense });
};

exports.updateExpense = async (req, res) => {
  const updated = await expenseService.updateExpense(req.params.id, req.user._id, req.validated);
  if (!updated) return res.status(404).json({ message: 'Expense not found' });
  res.json({ expense: updated });
};

exports.deleteExpense = async (req, res) => {
  const deleted = await expenseService.deleteExpense(req.params.id, req.user._id);
  if (!deleted) return res.status(404).json({ message: 'Expense not found' });
  res.status(204).send();
};
