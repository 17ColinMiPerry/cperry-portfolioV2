import emailjs from '@emailjs/browser';

export const sendEmail = (formData) => {

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_email: 'cperry.webmaster@gmail.com',
    reply_to: formData.email,
    subject: `${formData.subject} - Contact from ${formData.name}`,
    title: formData.subject,
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams
  )
  .then((response) => {
    console.log('Email sent successfully:', response);
    return response;
  })
  .catch((error) => {
    console.error('Email sending failed:', error);
    throw error;
  });
};
