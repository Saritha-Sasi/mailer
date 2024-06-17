const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saaritha543@gmail.com', // Replace with your email
    pass: 'xkom tkqz vwgr mieh',  // Replace with your email password
  },
});

// Set up email data
const mailOptions = {
  from: 'saaritha543@gmail.com', // Sender address
  to: 'saritha.claysys@gmail.com',  // List of recipients
  subject: 'Hello from Nodemailer', // Subject line
  text: 'Hello, this is a test email sent using Nodemailer!', // Plain text body
  // html: '<b>Hello, this is a test email sent using Nodemailer!</b>', // HTML body (optional)
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
