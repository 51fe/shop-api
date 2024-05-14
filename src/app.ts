import express from 'express';
import path from 'node:path';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/error';

import shop from './routes/shop';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', shop);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`
  🚀 Server ready at: http://localhost:${PORT}`);
});
