const express = require('express');
const { processEmail } = require('./controllers/emailController');
const router = express.Router();

router.get('/process-email', processEmail);

module.exports = router;
