const generateThankYouPage = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f9f9f9;
    }

    /* Container */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      min-height: 100vh; 
      display: flex;
      flex-direction: column;
      justify-content: flex-start; 
    }

    /* Back Link */
    .back-link a {
      text-decoration: none;
      color: #007bff;
      margin-bottom: 20px;
      display: inline-block;
      font-size: 14px;
    }

    /* Confirmation Section */
    .confirmation {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin-bottom: 20px;
      width: 100%;
      max-width: 800px;
    }

    .image-section {
      text-align: center;
      margin-bottom: 10px;
    }

    .image-section img {
      border-radius: 50%;
      max-width: 150px;
    }

    .details-section {
      text-align: center;
    }

    .success-message {
      color: green;
      font-size: 20px;
      margin: 10px 0;
    }

    .description {
      color: #555;
      font-size: 14px;
    }

    /* Details Section */
    .details {
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 100%;
      max-width: 600px;
      margin-top: 20px; 
    }

    .appointment-header h2 {
      color: #007bff;
      text-align: center;
    }

    .profile-info,
    .appointment-details,
    .session-details,
    .payment-summary {
      margin-bottom: 20px;
    }

    .profile-info p,
    .appointment-details p,
    .session-details p,
    .payment-summary p {
      margin: 5px 0;
      font-size: 14px;
    }

    .payment-summary .download-receipt {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
      display: inline-block;
      margin-top: 10px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .confirmation {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .success-message {
        font-size: 18px;
      }

      .description {
        font-size: 12px;
      }

      .details {
        padding: 15px;
        margin-top: 10px;
        width: 90%;
      }
     
      .profile-info p,
      .appointment-details p,
      .session-details p,
      .payment-summary p {
        font-size: 12px;
      }

      .image-section img {
        max-width: 120px; 
      }

      .payment-summary .download-receipt {
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      .success-message {
        font-size: 16px;
        margin-top: 10px;
      }

      .description {
        font-size: 10px;
      }

      .details {
        padding: 10px;
        margin-top: 10px;
        width: 100%; 
      }

      .image-section img {
        max-width: 100px; 
      }

      .payment-summary .download-receipt {
        font-size: 10px; 
      }

      .profile-info p,
      .appointment-details p,
      .session-details p,
      .payment-summary p {
        font-size: 10px; 
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="back-link">
      <a href="#">Back To Home</a>
    </div>

    <div class="confirmation">
      <!-- Image Section -->
      <div class="image-section">
        <img src="https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png" alt="Nurse">
        <p class="success-message">
          <strong>Hi ${data.name}, Thank You!</strong>
          <p class="description">
          We have received your email <strong>${data.email}</strong> and contact <strong>${data.contact}</strong>.
          Thank you for believing in momkidcare.com! Soon, our health advisor will contact you for service delivery.
        </p>
        </p>
      </div>

    <div class="details">
      <!-- Appointment Header -->
       <p><strong>Ashwini joy</strong></p>
       <p>Pregnancy Yoga</p>
       <p>Yoga For Weight Management (package)</p>
       <p>Mode: Online</p>
      <div class="appointment-header">
        <h2>Your Appointment Details</h2>
      </div>

      <div class="appointment-details">
        <p><strong>Booking Date:</strong> 11/07/2022</p>
        <p><strong>Booking Time:</strong> 10:00 am</p>
        <p><strong>Booking Id:</strong> tnRdBga</p>
      </div>

      <div class="session-details">
        <p><strong>Date:</strong> 13/07/2022</p>
        <p><strong>Time:</strong> 11:00 am</p>
        <p><strong>No of Sessions:</strong> 12/Month</p>
        <p><strong>Duration:</strong> 60 minutes</p>
      </div>

      <div class="payment-summary">
        <p><strong>Service Consultation Charge:</strong> Rs 5000</p>
        <p><strong>Convenience Fee:</strong> Rs 0</p>
        <p><strong>Total Service Consultation Charges:</strong> Rs 5000</p>
        <p><strong>Amount Received:</strong> Rs 0</p>
        <p><strong>Payment Type:</strong> Full</p>
        <p><strong>Amount Yet To Pay:</strong> Rs 0</p>
        <a href="#" class="download-receipt">Download Receipt</a>
      </div>
    </div>
  </div>
</body>
</html>

`;

module.exports = generateThankYouPage;
