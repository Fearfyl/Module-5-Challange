import express from 'express';
import cors from 'cors';
import dotnev from 'dotnev'
import postRoutes from './routes/postRoutes.js';

dotnev.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
}
);