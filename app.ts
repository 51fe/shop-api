import express from 'express';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/error';
// router
import index from './routes/index';
import api from './routes/api';

const PORT = process.env.PORT || 3000;
// Setup an express app
const app = express();
app.use(cors());

// Configure middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use('/v1', api);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`
  🚀 Server ready at: http://localhost:${PORT}`);
});
