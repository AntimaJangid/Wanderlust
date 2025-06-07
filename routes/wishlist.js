const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');
const User = require('../models/user');

// POST /wishlist/toggle/:id (AJAX-friendly)
router.post('/toggle/:id', async (req, res) => {
  try {
    const listingId = req.params.id;
    const user = await User.findById(req.user._id).populate('wishlist');

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const index = user.wishlist.findIndex(item => item._id.equals(listingId));
    if (index > -1) {
      user.wishlist.splice(index, 1); // Remove
      await user.save();
      return res.json({ isInWishlist: false });
    } else {
      user.wishlist.push(listingId); // Add
      await user.save();
      return res.json({ isInWishlist: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /wishlist (Render wishlist page)
router.get('/', async (req, res) => {
  const user = await User.findById(req.user._id).populate('wishlist');
  res.render('wishlist/index', { wishlist: user.wishlist });
});

module.exports = router;