import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('/audio');
});

export default router;
