const oauth2Client = new OAuth2(
  "308713975921-hj6i6dljk9u5fn212mail4ac8o7nvlb4.apps.googleusercontent.com", // ClientID
  "YigqjYxP8KEq0rmQ6a1DeFau", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1/-ZxOkxpnaoUZU1I6hepm9RHEKydxBJWa-mGNZtunRC0"
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: "johncon82@gmail.com", 
       clientId: "308713975921-hj6i6dljk9u5fn212mail4ac8o7nvlb4.apps.googleusercontent.com ",
       clientSecret: "YigqjYxP8KEq0rmQ6a1DeFau",
       refreshToken: "1/-ZxOkxpnaoUZU1I6hepm9RHEKydxBJWa-mGNZtunRC0",
       accessToken: accessToken
  }
});

const mailOptions = {
  from: "johncon82@gmail.com",
  to: "johncon82@gmail.com",
  subject: "Node.js Email with Secure OAuth",
  generateTextFromHTML: true,
  html: "<b>test</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});