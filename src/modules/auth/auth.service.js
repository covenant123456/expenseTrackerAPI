const User = require('./auth.model');
const bcrypt = require('bcryptjs');
const { generateToken } = require('./auth.utils');

exports.register = async ({ username, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already in use');

  const user = await User.create({ username, email, password });

  const token = generateToken(user._id);
  return {
    user: { id: user._id, username: user.username, email: user.email },
    token
  };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user._id);
  return {
    user: { id: user._id, username: user.username, email: user.email },
    token
  };
};
