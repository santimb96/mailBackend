import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const sendEmail = (req, res) => {

  const {
    name,
    email,
    subject,
    message
  } = req.body;

  if (!name || !email || !subject || !message) res.status(500).send({status: 500, message: 'Algún campo no es correcto'});

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: 'santiagomartinezbota@gmail.com',
    subject: `${subject} (from ${name} and ${email})`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send({status: 500, message: error});
    } else {
      res.status(200).send({status: 200, message: 'Email enviado a ' + process.env.CLIENTMAIL});
    }
  });
};

const checkOk = (req, res) => {
  return res.status(200).send({status: 200, message: 'Server is working'});
}

export default {
  sendEmail,
  checkOk
};