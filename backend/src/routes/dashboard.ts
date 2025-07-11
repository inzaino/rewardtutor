import { Router } from 'express';

const router = Router();

// @route   GET /api/dashboard/student
// @desc    Get student dashboard data
// @access  Private
router.get('/student', (req, res) => {
  res.json({ message: 'Get student dashboard - to be implemented' });
});

// @route   GET /api/dashboard/parent
// @desc    Get parent dashboard data
// @access  Private
router.get('/parent', (req, res) => {
  res.json({ message: 'Get parent dashboard - to be implemented' });
});

export default router;