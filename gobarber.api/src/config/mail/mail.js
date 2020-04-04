export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Diogo Faria <noreply@gobarber.com>',
  },
};

// Mail Trap - DEV: https://mailtrap.io/inboxes/871820/messages
// AMAZON SES - PROD
