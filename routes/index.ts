import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function (_req, res) {
  res.status(200).json({ message: 'App running' });
});

export default router
