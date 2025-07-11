import { Router } from 'express';

const router = Router();

// @route   GET /api/rewards/catalog
// @desc    Get available rewards
// @access  Private
router.get('/catalog', (req, res) => {
  res.json({ message: 'Get rewards catalog - to be implemented' });
});

// @route   POST /api/rewards/redeem
// @desc    Request reward redemption
// @access  Private
router.post('/redeem', (req, res) => {
  res.json({ message: 'Request reward redemption - to be implemented' });
});

export default router;