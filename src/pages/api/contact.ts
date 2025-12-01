import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    console.log("API Contact Endpoint Triggered");

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log("Form Data:", { name, email, message });

    try {
        await resend.emails.send({
            from: "Formulario Web <onboarding@resend.dev>",
            to: "angelaventuratours@gmail.com",  // Cambia a tu correo real
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <h2>Nuevo mensaje recibido:</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        console.log("Email enviado exitosamente.");
        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error("RESEND ERROR:", error);
        return new Response("Error al enviar el correo", { status: 500 });
    }
};
