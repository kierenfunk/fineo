const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MG_API_KEY});

exports.handler = async (event) => {
  const { data } = JSON.parse(event.body)

  try {
    const msg = await mg.messages.create('mg.fineodigital.com', {
      from: "Fineo Digital <mailgun@fineodigital.com>",
      to: ["kierenfunk@gmail.com"],
      subject: "Message from Fineo Digital Website",
      html: `<p>${data.email}</p><p>${data.name}</p><p>${data.message}</p>`,
    })
  }
  catch {
    return ({
      statusCode: 500,
      body: JSON.stringify('Failure')
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Success')
  }
};