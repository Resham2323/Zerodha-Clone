const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middleware/AuthMiddleware');
const router = require('express').Router();

// Public routes
router.post('/signup', Signup);
router.post('/login', Login);

// Protected POST route
router.post('/update-profile', userVerification, (req, res) => {
  // You can access the user from req.user
  res.json({ status: true, user: req.user.username, message: "Profile updated!" });
});

module.exports = router;