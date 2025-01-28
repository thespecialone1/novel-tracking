const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Novel = require('../models/Novel');

// Get all novels
router.get('/', async (req, res) => {
  try {
    const novels = await Novel.find().populate('addedBy', 'username');
    res.json(novels);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add new novel (authenticated)
router.post('/', auth, async (req, res) => {
  try {
    const newNovel = new Novel({
      ...req.body,
      addedBy: req.user.id
    });

    const novel = await newNovel.save();
    res.json(novel);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get single novel
router.get('/:id', async (req, res) => {
  try {
    const novel = await Novel.findById(req.params.id)
      .populate('addedBy', 'username')
      .populate('reviews');
      
    if (!novel) return res.status(404).json({ msg: 'Novel not found' });
    res.json(novel);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;