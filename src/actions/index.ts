import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import nodemailer from "nodemailer";

// Validar variables de entorno
const GMAIL_USER = import.meta.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = import.meta.env.GMAIL_APP_PASSWORD;
const GMAIL_TO = import.meta.env.GMAIL_TO;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !GMAIL_TO) {
    console.error("❌ Faltan variables de entorno: GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO");
    throw new Error("Configuración incompleta de Gmail");
}

// Configurar transportador de Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
    },
});

export const server = {
    send: defineAction({
        accept: "json",
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string(),
        }),
        handler: async (input) => {
            console.log("📧 Iniciando envío de correo...");
            console.log("📝 Datos recibidos:", { name: input.name, email: input.email });

            try {
                // Configurar el correo
                const mailOptions = {
                    from: `"${input.name}" <${GMAIL_USER}>`,
                    to: GMAIL_TO,
                    replyTo: input.email,
                    subject: `Nuevo mensaje de contacto - ${input.name}`,
                    text: `
Nuevo mensaje de contacto recibido:

Nombre: ${input.name}
Email: ${input.email}

Mensaje:
${input.message}

---
Este mensaje fue enviado desde el formulario de contacto de Angela Aventura Tours.
                    `,
                    html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); 
                  color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
        .label { font-weight: bold; color: #dc2626; }
        .message-box { background: white; padding: 20px; margin: 20px 0; 
                       border-left: 4px solid #dc2626; border-radius: 5px; }
        .footer { text-align: center; color: #888; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>✉️ Nuevo Mensaje de Contacto</h2>
            <p>Angela Aventura Tours</p>
        </div>
        <div class="content">
            <div class="info-row">
                <span class="label">👤 Nombre:</span> ${input.name}
            </div>
            <div class="info-row">
                <span class="label">📧 Email:</span> 
                <a href="mailto:${input.email}">${input.email}</a>
            </div>
            <div class="message-box">
                <p class="label">💬 Mensaje:</p>
                <p>${input.message.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="footer">
                <p>Recibido el ${new Date().toLocaleString('es-PE', { 
                    timeZone: 'America/Lima',
                    dateStyle: 'full',
                    timeStyle: 'short'
                })}</p>
            </div>
        </div>
    </div>
</body>
</html>
                    `,
                };

                console.log("📬 Enviando email a:", GMAIL_TO);

                // Enviar el correo
                const info = await transporter.sendMail(mailOptions);

                console.log("✅ Email enviado exitosamente!");
                console.log("📨 Message ID:", info.messageId);

                return { 
                    success: true, 
                    data: {
                        message: "Mensaje enviado correctamente",
                        messageId: info.messageId
                    }
                };

            } catch (error) {
                console.error("❌ Error inesperado:", error);

                // Si ya es un ActionError, re-lanzarlo
                if (error instanceof ActionError) {
                    throw error;
                }

                // Errores específicos de autenticación
                if (error instanceof Error && error.message.includes("Invalid login")) {
                    throw new ActionError({
                        code: "UNAUTHORIZED",
                        message: "Error de autenticación con Gmail",
                    });
                }

                // Si es otro tipo de error, envolverlo
                throw new ActionError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: error instanceof Error ? error.message : "Error desconocido al enviar correo",
                });
            }
        },
    }),
};