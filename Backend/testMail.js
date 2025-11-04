import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
      to: process.env.MAIL_TO,
      subject: "🚀 Prueba de Mailtrap desde Constructora Navarro",
      html: `
        <h2>Correo de prueba</h2>
        <p>Este es un correo de prueba enviado desde el backend de Constructora Navarro.</p>
        <p>Si lo ves en tu bandeja de entrada de <b>Mailtrap</b>, la conexión funciona correctamente 🎉</p>
      `,
    });

    console.log("✅ Correo de prueba enviado con éxito:", info.messageId);
  } catch (error) {
    console.error("Error al enviar correo:", error);
  }
}

console.log("📬 Mailtrap variables cargadas:");
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("MAILTRAP_USER:", process.env.MAILTRAP_USER);

sendTestEmail();
