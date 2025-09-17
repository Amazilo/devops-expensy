import express from 'express';
import connectDB from './config/db.config'; // your MongoDB connection logic
import routes from './routes'; // assuming you have a routes index

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', routes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
