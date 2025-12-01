import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        }),

        handler: async ({ name, email, message }) => {
            const { data, error } = await resend.emails.send({
                from: 'Consultas <np-reply@gmail.com>',
                to: ['rtipiani@gmail.com'],
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
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }

            return data;
        }
    })
}