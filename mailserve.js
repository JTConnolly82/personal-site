const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
  name = JSON.stringify(req.body);
  console.log(name);
  var mailOptions = {
    from: "johncon82@gmail.com",
    to: "johncon82@gmail.com",
    subject: "Email sent from your website!",
    generateTextFromHTML: true,
    text: name
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
  res.redirect('/contactcomplete')
  res.end()
})

const oauth2Client = new OAuth2(
  CLIENT_ID, // ClientID
  CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "johncon82@gmail.com", 
       clientId: CLIENT_ID,
       clientSecret: CLIENT_SECRET,
       refreshToken: REFRESH_TOKEN,
       accessToken: accessToken
  }
});

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`server started on port ${port}.`));


// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }




// app.get('/api/customers', (req, res, next) => {
//   const customers = [
//     {id: 1, firstName: 'not', lastName: 'arealperson'},
//     {id: 2, firstName: 'another', lastName: 'name'},
//     {id: 3, firstName: 'fake', lastName: 'person'}
//   ];
//   res.json(customers);
// });