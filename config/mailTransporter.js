import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    //service: process.env.MAIL_SERVICE,
    //secure: false,
    /* service: process.env.SMTP_HOST, */
    service: process.env.MAIL_SERVICE,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    secure: false,
        tls: {
          rejectUnauthorized: false,
        },
        debug: true,    
  });

export function verifyTransporter() 
    { transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email Server is ready to take our messages", success);
        }
      });
    }

    


