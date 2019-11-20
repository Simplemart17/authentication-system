import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const confirmationMail = async (email, token) => {
  try {
    const msg = {
      to: email,
      from: 'no-reply@mail.com',
      subject: 'Confirmation Mail',
      text: `Follow this link to verify your account http://${process.env.URL_HOST}:5000/v1/confirm?verificationToken=${token}`,
    };
    const mailSent = await sgMail.send(msg);
    return mailSent;
  } catch (error) {
    console.log(error);
  }
};

export default confirmationMail;
