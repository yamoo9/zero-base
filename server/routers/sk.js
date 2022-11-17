import { Router } from 'express';
import sk from '../models/sk.json' assert { type: 'json' };

const router = Router();

router.get('/', (req, res) => {
  res.json(sk);
});

export default router;
