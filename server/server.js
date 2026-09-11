import express from 'express';
import scenarioRoutes from './routes/scenarioRoutes.js';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Financial Literacy Game API is running! 🚀');
});

app.use('/api/scenarios', scenarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});