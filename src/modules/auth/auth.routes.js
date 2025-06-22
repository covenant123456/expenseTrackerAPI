const express = require('express');
const { register, login } = require('./auth.controller');
const validate = require('../../middlewares/validate.middleware');
const { registerSchema } = require('./dto/register.dto');
const { loginSchema } = require('./dto/login.dto');
const router = express.Router();
const auth = require('../../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, email, password]
 *             properties:
 *               username:
 *                 type: string
 *                 example: covenant
 *               email:
 *                 type: string
 *                 example: me@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id: { type: string }
 *                     username: { type: string }
 *                     email: { type: string }
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid input
 */
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user and get a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: me@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongpassword123
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 60d21b4667d0d8992e610c85
 *                     username:
 *                       type: string
 *                       example: covenant
 *                     email:
 *                       type: string
 *                       example: me@example.com
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR...
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 */
/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get the currently authenticated user's info
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched user info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 66588cb9f8e3b2a8f65a246b
 *                     username:
 *                       type: string
 *                       example: covenant
 *                     email:
 *                       type: string
 *                       example: me@example.com
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       404:
 *         description: User not found
 */

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/me', auth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
