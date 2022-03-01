import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import request from 'request';
import mailRouter from './routers/mailRouter.js';
import cartRouter from './routers/cartRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import serviceRouter from './routers/serviceRouter.js';
import projectRouter from './routers/projectRouter.js';
import appointmentRouter from './routers/appointmentRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.get('/api/jokes', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

// MongoDB Database Connection
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/unique_plumbers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// REST API Routers
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/cart', cartRouter);
app.use('/api/services', serviceRouter);
app.use('/api/mails', mailRouter);
app.use('/api/projects', projectRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/appointments', appointmentRouter);

// Paypal Configuration File
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

// FlutterWave Keys
app.get('/api/config/flutterwave', (req, res) => {
  res.send({ publicKey: process.env.FLUTTERWAVE_PUB_KEY || 'flw', secretKey: process.env.FLUTTERWAVE_SEC_KEY || 'flw', encKey: process.env.FLUTTERWAVE_ENC_KEY || 'flw' });
});

// Google Api Key
app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || 'XX');
});

// Project Directory
const __dirname = path.resolve();

// Uploads Static Route
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Files Route
app.get('/api/files/:filename', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/temps/' + req.params.filename))
);

// Frontend Static Route
app.use(express.static(path.join(__dirname, '/frontend/build')));

// Main Route
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
