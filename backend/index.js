import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
import notesRoute from './src/routes/notes_route.js';
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.mongoURI || 'mongodb://localhost:27017/workshop';

try {
 await mongoose.connect(mongoURI);
  console.log('Connected to MongoDB');
}
 catch (error) {
  console.error('Error connecting to MongoDB:', error);
}


app.use(cors("http://localhost:5173/"));
app.use(express.json());
app.use('/notes', notesRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});