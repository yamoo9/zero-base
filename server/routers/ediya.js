import { Router } from 'express';
import ediya from '../models/ediya.json' assert { type: 'json' };

const router = Router();

router.get('/', (req, res) => {
  res.json(ediya);
});

export default router;
