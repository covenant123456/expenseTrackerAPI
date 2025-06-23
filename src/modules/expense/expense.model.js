const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  title: { type: String },
  note: { type: String },
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
