const dotenv = require('dotenv').config({ debug: true });

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.emailUser, // 'donotreply@chatterboxsm.com',
        pass: process.env.emailPass // AuthUser100
    }
});

console.log('credentials', process.env.emailUser + ' ' + process.env.emailPass);

var mailOptions = {
    from: 'donotreply@chatterboxsm.com',
    to: 'cruckman900@gmail.com', 
    subject: 'Please verify your ChatterboxSM account.',
    html: '<h1>Booya!</h1>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

/* Outgoing server (SMTP): port 465 for SSL, port 587 for TLS/STARTTLS

Outgoing server authentication should be switched on,
SPA (secure password authentication) must be disabled. */