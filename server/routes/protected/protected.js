import express from 'express';
import { verifyToken } from '../utils/secretToken.js';

const router = express.Router();

router.get('/check', verifyToken, (req, res) => {
    res.json({ 
        message: 'Access granted',
        user: req.user });
})

export default router;