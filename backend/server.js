import path from 'path';
import colors from 'colors'
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import connectDB from './config/db.js'
import vehicleRoutes from './routes/vehicleRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();
connectDB()
mongoose.set('strictQuery', true);


// Routes
app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
