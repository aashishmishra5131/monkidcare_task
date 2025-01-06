const Imap = require('imap-simple');
const nodemailer = require('nodemailer');
const { simpleParser } = require('mailparser');
const { EMAIL, PASSWORD, IMAP_HOST, SMTP_HOST, SMTP_PORT, FORWARD_TO } = require('../../config/dotenvConfig');
const generateThankYouPage = require('./htmlTemplate');

const imapConfig = {
  imap: {
    user: EMAIL,
    password: PASSWORD,
    host: IMAP_HOST,
    port: 993,
    tls: true,
    authTimeout: 3000,
    tlsOptions: {
      rejectUnauthorized: false, 
    },
  },
};

const fetchLatestEmail = async () => {
  const connection = await Imap.connect(imapConfig);
  await connection.openBox('INBOX');

  const messages = await connection.search(['UNSEEN'], { bodies: ['HEADER', 'TEXT'], markSeen: true });

  if (!messages.length) {
    console.log('No new emails');
    return null;
  }

  const latestEmail = messages[messages.length - 1];
  const parsedEmail = await simpleParser(latestEmail.parts.find((part) => part.which === 'TEXT').body);
  connection.end();
  

  const text = parsedEmail.text || '';
  const nameMatch = text.match(/name:\s*(.*)/i);
  const emailMatch = text.match(/email:\s*([\w.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})/i);
  const contentMatch = text.match(/content:\s*(.*)/i);

  const extractedDetails = {
    name: nameMatch ? nameMatch[1].trim() : 'N/A',
    email: emailMatch ? emailMatch[1].trim() : 'N/A',
    contact: contentMatch ? contentMatch[1].trim() : 'N/A',
  };

  console.log('Extracted Details:', extractedDetails);

  return extractedDetails;
};


const extractDetails = (emailBody) => {
  const nameMatch = emailBody.match(/Name:\s*(.*)/);
  const emailMatch = emailBody.match(/Email:\s*(.*)/);
  const contactMatch = emailBody.match(/Contact:\s*(.*)/);

  return {
    name: nameMatch ? nameMatch[1].trim() : 'N/A',
    email: emailMatch ? emailMatch[1].trim() : 'N/A',
    contact: contactMatch ? contactMatch[1].trim() : 'N/A',
  };
};

const forwardEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: { user: EMAIL, pass: PASSWORD },
    tls: {
      rejectUnauthorized: false,  
    },
  });
console.log(data, "data");
  const htmlContent = generateThankYouPage(data);

  await transporter.sendMail({
    from: EMAIL,
    to: FORWARD_TO,
    subject: `New Application Received from ${data.name}`,
    html: htmlContent,
  });
  console.log('Email forwarded successfully');
};

module.exports = { fetchLatestEmail, extractDetails, forwardEmail };
