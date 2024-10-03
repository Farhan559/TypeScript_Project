import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', userRoutes);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app;
