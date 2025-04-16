const env = {
  // EmailJS Keys
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

  // Other Environment Variables
  appEnv: import.meta.env.VITE_APP_ENV || 'development',
};

export default env;
