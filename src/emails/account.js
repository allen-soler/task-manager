const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.GRIDAPI

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.fromEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to to the app, ${name}. Let me know how  you get along with the app.`
    })
}

const sendUnsubEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.fromEmail,
        subject: 'We are sad you are leaving',
        text: `Bye my friend, ${name}. The team will miss you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendUnsubEmail
}