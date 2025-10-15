const Config = {
  url: {
    github: "https://github.com/toni770",
    linkedin: "https://www.linkedin.com/in/toni-martin-649251185/",
    gmail: "mailto:info@tonimartin.dev",
  },
  config: {
    showProjectFilter: false,
  },
  contact: {
    email: "info@tonimartin.dev",
    phone: "+34 671 678 023",
  },
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  },
};
export default Config;
