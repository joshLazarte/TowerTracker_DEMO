const { parseStringToBool } = require("../utilities/parsers");
module.exports = {
  transport: {
    host: process.env.EMAILHOST,
    port: process.env.EMAILPORT,
    secure: parseStringToBool(process.env.EMAILSECURE),
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  },
  mailOptions: (destination, emailBody) => {
    return {
      from: `"Tower SRO Generator" <${process.env.EMAILUSER}>`,
      to: destination,
      subject: "Cell Tower SROs",
      html: emailBody
    };
  }
};
