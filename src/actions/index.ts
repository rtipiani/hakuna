import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "json",
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string(),
        }),
        handler: async (input) => {
            const { data, error } = await resend.emails.send({
                from: import.meta.env.CONTACT_EMAIL_FROM,
                to: import.meta.env.CONTACT_EMAIL_TO,
                replyTo: input.email,
                subject: `New message from ${input.name}`,
                html: `<p><strong>Name:</strong> ${input.name}</p>
                       <p><strong>Email:</strong> ${input.email}</p>
                       <p><strong>Message:</strong> ${input.message}</p>`,
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