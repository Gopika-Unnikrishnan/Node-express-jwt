const express = require('express');
const router = express.Router();
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');

// General user-only route
router.get('/user-dashboard', authenticate, authorizeRoles('user', 'admin'), (req, res) => {
  res.json({ msg: `Welcome ${req.user.username}, you are a ${req.user.role}` });
});

// Admin-only route
router.get('/admin-dashboard', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ msg: `Admin area. Hello ${req.user.username}` });
});

module.exports = router;
