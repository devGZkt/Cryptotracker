import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users/users.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error: ' + err))


app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`))
.on('error', (err) => {
  console.error(`Error occurred:`, err);
})




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/solana`);
});