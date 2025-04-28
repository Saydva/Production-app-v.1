import express from 'express';
import mongose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
// import { router } from './routes/index.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/prodApp'; 

mongose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());  

app.use(express.urlencoded({ extended: true }));
// app.use('/api', router); // Use the router for all API routes  

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
}); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

