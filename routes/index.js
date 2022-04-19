const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index.html", { title: "Node-Express web" });
});
router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact page" });
});

router.post("/contact", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    name: "wal",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.TO_MY_EMAIL,
    subject: req.body.email,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("email sent: " + info.response);
      res.send("success");
    }
  });
});

module.exports = router;
