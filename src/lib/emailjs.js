import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendContactEmail({ name, phone, email, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      form_type: 'Contact Message',
      from_name: name,
      from_phone: phone,
      from_email: email || 'Not provided',
      org_type: 'General Enquiry',
      organization: 'N/A',
      product_interest: 'N/A',
      quantity: 'N/A',
      message,
    },
    PUBLIC_KEY
  )
}

export async function sendEnquiryEmail({ name, orgType, organization, phone, email, productInterest, quantity, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      form_type: 'Product Enquiry',
      from_name: name,
      from_phone: phone,
      from_email: email || 'Not provided',
      org_type: orgType,
      organization: organization || 'Not specified',
      product_interest: productInterest,
      quantity: quantity || 'Not specified',
      message,
    },
    PUBLIC_KEY
  )
}
