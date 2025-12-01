import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
        await resend.emails.send({
            from: "Formulario Web <onboarding@resend.dev>",
            to: "angelaventuratours@gmail.com", // <-- tu correo real
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo mensaje desde el formulario de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        return new Response("OK", {
            status: 200,
        });
    } catch (error) {
        console.error(error);

        return new Response("Error sending email", {
            status: 500,
        });
    }
};
