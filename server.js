
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();
const port = 3000;

// Set your SendGrid API key (provided by the user)
sgMail.setApiKey('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'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const userEmail = req.body.email;

  const msg = {
    to: userEmail, // The user's email address
    from: 'floris@oever.art', // Your verified sender email
    subject: 'Your Free Artwork from OEVER.ART',
    text: 'Dear ArtLover, Here is your free copy of "Het meisje met de bloemen".',
    html: '<strong>Dear ArtLover,</strong><br>Here is your free copy of "Het meisje met de bloemen".', 
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send('Email sent successfully!');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
