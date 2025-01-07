const { fetchLatestEmail, extractDetails, forwardEmail } = require('../services/emailService');
const { saveApplication } = require('./dbController');

const processEmail = async (req, res) => {
  try {
    const data = await fetchLatestEmail();
    if (!data) return res.status(404).send('No new emails found');

    await saveApplication(data);
    await forwardEmail(data);

    res.status(200).send('Email processed and forwarded successfully');
  } catch (error) {
    console.error('Error processing email:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { processEmail };
