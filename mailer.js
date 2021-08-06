const nodemailer = require('nodemailer')
const { EMAILADDRESS, PASSWORD } = require('./.env')

async function sendEmail() {
  const hostname = 'hostname from account page'
  const emailaddress = EMAILADDRESS
  const password = PASSWORD

  const transporter = nodemailer.createTransport({
    host: hostname,
    port: 5057,
    secure: false,
    requireTLS: true,
    auth: {
      user: emailaddress,
      pass: password,
    },
    logger: true,
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Sender Name" <from@example.net>',
    to: 'to@example.com',
    subject: '🌠🌠🌠',
    text: 'Hello world?',
    html: '<strong>Hello world?</strong>',
    headers: { 'x-myheader': 'test header' },
  })

  console.log('Message sent: %s', info.response)
}

module.exports = sendEmail
