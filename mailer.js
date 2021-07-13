const nodemailer = require('nodemailer')

async function sendEmail() {
  const hostname = 'hostname from account page'
  const username = 'username from account page'
  const password = 'password from account page'

  const transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true,
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Sender Name" <from@example.net>',
    to: 'to@example.com',
    subject: 'Hello from node',
    text: 'Hello world?',
    html: '<strong>Hello world?</strong>',
    headers: { 'x-myheader': 'test header' },
  })

  console.log('Message sent: %s', info.response)
}

module.exports = sendEmail
