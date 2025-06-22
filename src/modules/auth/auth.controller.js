const AuthService = require('./auth.service');

exports.register = async (req, res) => {
  const result = await AuthService.register(req.validated);
  res.status(201).json(result);
};

exports.login = async (req, res) => {
  const result = await AuthService.login(req.validated);
  res.status(200).json(result);
};
exports.getCurrentUser = (req, res) => {
  res.status(200).json({
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email
    }
  });
};