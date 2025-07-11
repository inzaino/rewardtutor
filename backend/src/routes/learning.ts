import { Router } from 'express';

const router = Router();

// @route   GET /api/learning/activities
// @desc    Get learning activities
// @access  Private
router.get('/activities', (req, res) => {
  res.json({ message: 'Get learning activities - to be implemented' });
});

// @route   GET /api/learning/khan/:topic
// @desc    Get Khan Academy content for topic
// @access  Private
router.get('/khan/:topic', (req, res) => {
  res.json({ message: 'Get Khan Academy content - to be implemented' });
});

export default router;