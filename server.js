const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Port for your server

app.use(bodyParser.json()); // To parse JSON bodies

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services like SendGrid, etc.
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password'    // Your email password (or app password)
    }
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, number, email } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com', // The email address where you want to receive the data
        subject: 'New Subscription',
        text: `Name: ${name}\nPhone Number: ${number}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send({ message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.send({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
