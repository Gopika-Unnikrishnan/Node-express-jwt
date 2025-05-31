const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/',authenticate, authorizeRoles('user', 'admin'), async (req, res) => {
    try {
      const {
        name, category, description, price,
        color, size, storage
      } = req.body;
  
      // Validate required fields
      if (!name || !category || !description || !price || !color || !size || !storage) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const product = new Product({
        name,
        category,
        description,
        price,
        color,
        size,
        storage
      });
  
      const savedProduct = await product.save();
  
      res.status(201).json({
        message: 'Product created successfully',
        product: savedProduct
      });
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  module.exports = router;