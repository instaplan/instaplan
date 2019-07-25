require('dotenv').config();
const nodemailer = require('nodemailer');

const contact = function (req, res) {
   const { name, email, message } = req.body;
   const { EMAIL_HOST, EMAIL_NAME, EMAIL_PW } = process.env;

   const transport = {
      host: EMAIL_HOST,
      auth: {
         user: EMAIL_NAME,
         pass: EMAIL_PW
      }
   };

   const transporter = nodemailer.createTransport(transport);

   const helperOptions = {
      from: process.env.EMAIL_NAME,
      to: process.env.EMAIL_NAME,
      subject: `INSTAPLAN MESSAGE FROM ${name}, ${email}`,
      text: message,
      replyTo: email
   };

   transporter.sendMail(helperOptions, (err, success) => {
      if (err) {
         console.log(err);
         res.send('Failed to send message.');
      } else {
         console.log(success);
         res.send('Message sent!');
      };
   })
}

module.exports = contact;