import './chunks/virtual_B0SgGv2A.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_BRRsNqos.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_BNwg5yew.mjs';

const resend = new Resend("re_JKoRvM3Z_L8FXdTk7yjZotq2CgbZDrWGi");
const server = {
  send: defineAction({
    accept: "json",
    input: z.object({
      name: z.string().min(1, "El nombre es requerido"),
      email: z.string().email("Email inválido"),
      message: z.string().min(1, "El mensaje es requerido")
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        subject: `Nuevo mensaje de ${name}`,
        replyTo: email,
        // ← Corregido a camelCase
        html: `
                    <h2>Nueva consulta desde la web</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                `
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return { success: true, data };
    }
  })
};

export { server };
