import express from 'express';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/error';
// router
import index from './routes/index';
import api from './routes/api';

const PORT = process.env.PORT || 3000;

const app = express();
const whitelist = ['51fe.site', 'localhost', '127.0.0.1', '0.0.0.0']
app.use(cors({
  origin:  (item, callback) => {
    if (item && whitelist.some(url => item.includes(url))) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));

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
