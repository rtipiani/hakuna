// @ts-ignore
import { defineAction, ActionError } from "astro:actions";
import nodemailer from "nodemailer";

const GMAIL_USER = import.meta.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = import.meta.env.GMAIL_APP_PASSWORD;
const GMAIL_TO = import.meta.env.GMAIL_TO;

// ⚠️ Importante en Vercel: no validar variables FUERA del handler
//    (evita crash en la función)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

export const server = {
  send: defineAction({
    accept: "form",
    handler: async (formData) => {
      // 🔹 Validación segura de env vars dentro del request
      if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !GMAIL_TO) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Config de correo incompleta en el servidor.",
        });
      }

      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      if (!name || !email || !message) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Todos los campos son obligatorios.",
        });
      }

      try {
        const info = await transporter.sendMail({
          from: `"${name}" <${GMAIL_USER}>`,
          to: GMAIL_TO,
          replyTo: email,
          subject: `Nuevo mensaje de ${name}`,
          text: message,
        });

        return {
          success: true,
          id: info.messageId,
        };

      } catch (err) {
        console.error("❌ Error Nodemailer:", err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el correo.",
        });
      }
    },
  }),
};
