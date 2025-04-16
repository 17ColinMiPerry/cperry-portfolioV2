import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// This should ideally be done in your main App component or in an initialization file
// emailjs.init("YOUR_PUBLIC_KEY"); // Uncomment and add your public key if not done elsewhere

export const sendEmail = (formData) => {
  // Create a template params object with all necessary fields
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
    // Most EmailJS templates expect these variable names
    // The template might use any of these variables with {{variable_name}} syntax
  };

  // Send the email using EmailJS
  // Note: We don't need to pass the public key here since it's initialized in App.jsx
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS service ID from environment variable
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID from environment variable
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
