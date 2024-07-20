import express from 'express';
import path from 'path';
import auth from './routes/auth.js';
import list from './routes/list.js';
import './conn/conn.js';  // Assuming this is where your connection setup is

const app = express();

app.use(express.json());

app.use('/api/v1', auth);
app.use('/api/v2', list);

app.get('/', (req, res) => {
  res.send('connected');
});

app.listen(4000, () => {
  console.log('Server Started');
});
