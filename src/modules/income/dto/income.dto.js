const { z } = require('zod');

exports.incomeSchema = z.object({
  amount: z.number().positive(),
  category: z.string().min(2),
  title: z.string().optional(),
  note: z.string().optional(),
  date: z.string().datetime({ offset: true })
});
