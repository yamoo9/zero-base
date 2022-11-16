import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config();

const router = Router();
const { API_VERSION } = process.env;

router.get('/', (req, res) => {
  const linkList = [
    { href: `${API_VERSION}/ediya`, text: 'ediya' },
    { href: `${API_VERSION}/tiltcard`, text: 'tiltcard' },
    { href: `${API_VERSION}/sk`, text: 'sk' },
  ];

  res.render('index', {
    title: 'API 서버',
    headline: 'API 엔드포인트 리스트',
    linkList,
  });
});

export default router;
