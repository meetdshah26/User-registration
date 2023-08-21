const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const authRoutes = require('./routes/userRoute');
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
