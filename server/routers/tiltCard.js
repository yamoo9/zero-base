import { Router } from 'express';
import tiltCard from '../models/tiltcard.json' assert { type: 'json' };

const router = Router();

router.get('/', (req, res) => {
  res.json(tiltCard);
});

export default router;
