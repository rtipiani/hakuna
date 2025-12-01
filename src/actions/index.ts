import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",  // Aceptamos el formulario

        handler: async (formData) => { // Recibimos formData directamente

            // Extraemos los valores de los campos
            const name = formData.get("name") as string | null;
            const email = formData.get("email") as string | null;
            const message = formData.get("message") as string | null;

            // Validamos que no falten datos
            if (!name || !email || !message) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "Faltan campos",
                });
            }

            // Enviamos el correo con Resend
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

            // Si hubo un error al enviar el correo
            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return data;
        },
    }),
};
