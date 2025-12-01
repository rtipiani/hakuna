import './chunks/virtual_BXSI0rNn.mjs';
import { Resend } from 'resend';
import { z } from 'zod';
import { d as defineAction } from './chunks/server_C6oVW338.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_WngsdbV7.mjs';

const resend = new Resend("re_JKoRvM3Z_L8FXdTk7yjZotq2CgbZDrWGi");
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string()
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Consultas <no-reply@gmail.com>",
        to: ["rtipiani@gmail.com"],
        subject: `Nuevo mensaje de ${name}`,
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
      return data;
    }
  })
};

export { server };
