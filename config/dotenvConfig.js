require('dotenv').config();

module.exports = {
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  FORWARD_TO: process.env.FORWARD_TO,
  IMAP_HOST: process.env.IMAP_HOST,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
};
