const { z } = require('zod');

exports.expenseSchema = z.object({
  amount: z.number().negative(),
  category: z.string().min(2),
  title: z.string().optional(),
  note: z.string().optional(),
  date: z.string().datetime({ offset: true })
});
