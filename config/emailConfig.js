const imapConfig = {
    host: process.env.IMAP_HOST,
    port: 993,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, 
    },
  };
  