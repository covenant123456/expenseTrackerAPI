const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { expenseSchema } = require('./dto/expense.dto');
const expense = require('./expense.controller');

/**
 * @swagger
 * tags:
 *   name: Expense
 *   description: Manage your expense entries
 */

/**
 * @swagger
 * /api/expense:
 *   post:
 *     summary: Create a new expense record
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseInput'
 *     responses:
 *       201:
 *         description: Expense successfully created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized

 *   get:
 *     summary: Get all expense records for the authenticated user
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 incomes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Expense'
 */

/**
 * @swagger
 * /api/expense/{id}:
 *   get:
 *     summary: Get a specific expense record by ID
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Expense ID
 *     responses:
 *       200:
 *         description: Expense found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       404:
 *         description: Expense not found

 *   put:
 *     summary: Update an expense record by ID
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Expense ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseInput'
 *     responses:
 *       200:
 *         description: Expense updated
 *       404:
 *         description: Expense not found

 *   delete:
 *     summary: Delete an expense record by ID
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Expense ID
 *     responses:
 *       204:
 *         description: Expense deleted
 *       404:
 *         description: Expense not found
 */

router.use(auth);

router.post('/', validate(expenseSchema), expense.createExpense);
router.get('/', expense.getAllExpenses);
router.get('/:id', expense.getExpenseById);
router.put('/:id', validate(expenseSchema), expense.updateExpense);
router.delete('/:id', expense.deleteExpense);

module.exports = router;
