import './chunks/virtual_Dq6OZqCc.mjs';
import nodemailer from 'nodemailer';
import { d as defineAction } from './chunks/server_BcSoEpK6.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_CF3rsbn7.mjs';

const GMAIL_USER = "rtipiani@gmail.com";
const GMAIL_APP_PASSWORD = "dyyi scui yvez fngl";
const GMAIL_TO = "angelaventurachanchamayo@gmail.com";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD
  }
});
const server = {
  send: defineAction({
    accept: "form",
    handler: async (formData) => {
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      if (!name || !email || !message) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Todos los campos son obligatorios."
        });
      }
      try {
        const info = await transporter.sendMail({
          from: `"${name}" <${GMAIL_USER}>`,
          to: GMAIL_TO,
          replyTo: email,
          subject: `Nuevo mensaje de ${name}`,
          text: message
        });
        return {
          success: true,
          id: info.messageId
        };
      } catch (err) {
        console.error("❌ Error Nodemailer:", err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el correo."
        });
      }
    }
  })
};

export { server };
