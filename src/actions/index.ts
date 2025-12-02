// src/actions/index.ts
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "json",
        input: z.object({
            name: z.string().min(1, "El nombre es requerido"),
            email: z.string().email("Email inválido"),
            message: z.string().min(1, "El mensaje es requerido"),
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
                `,
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return { success: true, data };
        },
    }),
};