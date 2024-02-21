import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';
import config from './config';

const app = express();

mongoose
  .connect(config.database.DATABSE_URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err.message));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);
app.get('*', (req, res) => res.send('Teachify Api'));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
