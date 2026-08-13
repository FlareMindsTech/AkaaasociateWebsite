// src/services/contactForm.js

/**
 * Contact Form Service Layer
 *
 * Sends website project enquiries to the designated business email (kottiqlog@gmail.com)
 * using Web3Forms (a secure, frontend-safe form submission API).
 *
 * Security:
 * - Uses a public client-safe access key (VITE_WEB3FORMS_ACCESS_KEY).
 * - Zero private SMTP credentials, server secrets, or private API keys exposed to the client.
 *
 * @param {Object} formData
 * @param {string} formData.name - Visitor full name
 * @param {string} formData.phone - Visitor phone number
 * @param {string} formData.email - Visitor email address
 * @param {string} formData.service - Selected service required
 * @param {string} formData.message - Project details
 *
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.warn(
      "[ContactForm] VITE_WEB3FORMS_ACCESS_KEY is not configured in .env.\n" +
      "To receive form submissions at kottiqlog@gmail.com:\n" +
      "1. Go to https://web3forms.com and enter kottiqlog@gmail.com to receive an access key.\n" +
      "2. Add VITE_WEB3FORMS_ACCESS_KEY=your_key to your .env file."
    );
    return {
      success: false,
      message: "Email service is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to .env.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Website Enquiry — ${formData.name.trim()} (${formData.service})`,
        from_name: "AKA Associates Website",
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: formData.message.trim(),
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        message: "Thank you. Your enquiry has been sent successfully.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  } catch (error) {
    console.error("[ContactForm] Error submitting enquiry:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
