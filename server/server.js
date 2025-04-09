import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users/signup.js';
import loginRoutes from './routes/login/login.js';
import connectDB from './config/db.js';
import authenticateToken from './middleware/auth.js';
import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

connectDB();

app.use('/users', userRoutes);

app.use('/login', loginRoutes);

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acces granted', user: req.user })
})

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`))
.on('error', (err) => {
  console.error(`Error occurred:`, err);
})
