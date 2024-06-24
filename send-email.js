const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email service
    auth: {
      user: '',
      pass: ''
    }
  });

  let mailOptions = {
    from: '',
    to: '',
    subject: 'Cypress Test Results',
    text: 'Please find the attached test report.',
    attachments: [
      {
        filename: 'report.html',
        path: 'cypress/reports/report.html'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
