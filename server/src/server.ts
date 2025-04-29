import express from 'express';
import mongose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
import router from './routes/router'; // Import the router from the routes directory

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/prodApp'; 

mongose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware for parsing JSON and URL-encoded data
// Middleware for CORS (Cross-Origin Resource Sharing)
app.use(cors({
  origin: '*', // Allow all origins (you can specify a specific origin if needed)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// app.use(cors());
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());

app.use(`/`, router); // Initialize the router
app.use(express.urlencoded({ extended: true }));
// app.use('/api', router); // Use the router for all API routes  

// app.get('/', (req, res) => {
//   res.send('Welcome to the API!');
// }); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

