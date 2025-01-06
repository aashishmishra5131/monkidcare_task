const generateThankYouPage = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; }
    .container { background: white; padding: 20px; border-radius: 5px; max-width: 600px; margin: 0 auto; }
    h1 { color: #4CAF50; }
    p { font-size: 18px; }
    .details { margin-top: 20px; }
    .details span { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Thank You for Your Application!</h1>
    <p>We have successfully received your application with the following details:</p>
    <div class="details">
      <p><span>Name:</span> ${data.name}</p>
      <p><span>Email:</span> ${data.email}</p>
      <p><span>Contact:</span> ${data.contact}</p>
    </div>
    <p>We will get back to you shortly!</p>
  </div>
</body>
</html>
`;

module.exports = generateThankYouPage;
