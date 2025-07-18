import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: "nabinarai165@gmail.com",
    pass: "etas rofn qjcg vwnl",
  },
});

// Wrap in an async IIFE so we can use await.
const sendMail = async (email,subject,message) => {
  const info = await transporter.sendMail({
    from: '"Nabina Rai" <nabinarai165@gmail.com>',
    to: email,
    subject: subject,
    // text: "Hello world?", 
    html: `<b>${message}</b>`,
  });

  console.log("Message sent:", info.messageId);
};


export {sendMail};
