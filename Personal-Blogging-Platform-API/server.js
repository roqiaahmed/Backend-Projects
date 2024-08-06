require('dotenv').config();

const express = require('express');
const connectDb = require('./db/connect');
const router = require('./routes/index');
const port = 3000;

const app = express();

app.use(express.json());
app.use('/api/v1', router);
app.use(express.json());

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDb(process.env.DB_URL);
});
