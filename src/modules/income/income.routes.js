const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { incomeSchema } = require('./dto/income.dto');
const income = require('./income.controller');

/**
 * @swagger
 * tags:
 *   name: Income
 *   description: Manage your income entries
 */

/**
 * @swagger
 * /api/income:
 *   post:
 *     summary: Create a new income record
 *     tags: [Income]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncomeInput'
 *     responses:
 *       201:
 *         description: Income successfully created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized

 *   get:
 *     summary: Get all income records for the authenticated user
 *     tags: [Income]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of incomes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 incomes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Income'
 */

/**
 * @swagger
 * /api/income/{id}:
 *   get:
 *     summary: Get a specific income record by ID
 *     tags: [Income]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Income ID
 *     responses:
 *       200:
 *         description: Income found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Income'
 *       404:
 *         description: Income not found

 *   put:
 *     summary: Update an income record by ID
 *     tags: [Income]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Income ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncomeInput'
 *     responses:
 *       200:
 *         description: Income updated
 *       404:
 *         description: Income not found

 *   delete:
 *     summary: Delete an income record by ID
 *     tags: [Income]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Income ID
 *     responses:
 *       204:
 *         description: Income deleted
 *       404:
 *         description: Income not found
 */

router.use(auth);

router.post('/', validate(incomeSchema), income.createIncome);
router.get('/', income.getAllIncomes);
router.get('/:id', income.getIncomeById);
router.put('/:id', validate(incomeSchema), income.updateIncome);
router.delete('/:id', income.deleteIncome);

module.exports = router;
