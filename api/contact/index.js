module.exports = async function (context, req) {
  const { name, email, company, phone, subject, message, consent } = req.body || {};

  if (!name || !email || !message || !consent) {
    context.res = { status: 400, body: { error: "Missing required fields." } };
    return;
  }

  // In production: send via Azure Communication Services Email
  // For now: log the submission and return success
  context.log(`Contact form submission:
    Name: ${name}
    Email: ${email}
    Company: ${company || "N/A"}
    Phone: ${phone || "N/A"}
    Subject: ${subject || "N/A"}
    Message: ${message}
  `);

  // TODO: integrate ACS Email once acs-bullsai-email-dev is provisioned
  // const { EmailClient } = require("@azure/communication-email");
  // const client = new EmailClient(process.env.ACS_CONNECTION_STRING);
  // await client.beginSend({ ... });

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { success: true, message: "Your message has been received. We will be in touch within one business day." },
  };
};
