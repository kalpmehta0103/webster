const nodemailer = require('nodemailer');

const sendEmail = async (email, subj, text) => {
    try {
        let config = {
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        }
        
        let transporter = nodemailer.createTransport(config);
        
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: email,
            subject: subj,
            text: text
        });
        console.log('hello');
        console.log("Email sent succesfully");
    } catch (error) {
        console.log('Email not sent ' + error);
    }
}
module.exports = sendEmail;