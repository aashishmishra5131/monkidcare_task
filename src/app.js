const express = require('express');
const emailRoutes = require('./routes');
const { EMAIL } = require('../config/dotenvConfig');
const connectDB = require('../config/dbConfig');
const app = express();
const PORT = 3000;
connectDB();
app.use('/api', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Monitoring emails for ${EMAIL}`);
});
