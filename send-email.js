const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email service
    auth: {
      user: 'labsyda@gmail.com',
      pass: 'ydalabs889'
    }
  });

  let mailOptions = {
    from: 'labsyda@gmail.com',
    to: 'yudananjayaii@gmail.com',
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
