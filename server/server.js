import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users/users.js';
import loginRoutes from './routes/login/login.js';
import connectDB from './config/db.js';
dotenv.config();


const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

connectDB();

app.use('/users', userRoutes);

app.use('/login', loginRoutes);

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`))
.on('error', (err) => {
  console.error(`Error occurred:`, err);
})
