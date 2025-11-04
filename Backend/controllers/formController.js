import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Configuración del transporte (Mailtrap)
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Controlador principal para envío de formulario
const sendFormulario = async (req, res) => {
  const { nombre, email, telefono, tipoProyecto, metros, comuna, mensaje } =
    req.body;

  // Validación rápida
  if (!nombre || !email || !telefono || !tipoProyecto || !comuna || !mensaje) {
    return res.status(400).json({
      ok: false,
      message: "Faltan campos obligatorios",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
      to: process.env.MAIL_TO,
      subject: "Nueva cotización desde la web",
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f7f7f7; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(90deg, #ea580c, #f59e0b); padding: 20px 0; text-align: center; color: white;">
              <img src="https://i.ibb.co/5xW7sb1/LogoNavarro.png" alt="Constructora Navarro" style="width: 90px; margin-bottom: 10px;" />
              <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px;">Constructora Navarro</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Soluciones integrales en construcción y remodelaciones</p>
            </div>

            <!-- Body -->
            <div style="padding: 30px;">
              <h3 style="color: #111827; margin-bottom: 15px;">Nueva cotización recibida</h3>
              <p style="margin: 0 0 15px; color: #374151;">Has recibido una nueva solicitud de cotización desde el formulario web:</p>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tbody>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Nombre:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Teléfono:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${telefono}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Tipo de Proyecto:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${tipoProyecto}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Metros cuadrados:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${
                      metros || "No especificado"
                    }</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Comuna:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${comuna}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; vertical-align: top;"><strong>Mensaje:</strong></td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${mensaje}</td>
                  </tr>
                </tbody>
              </table>

              <p style="font-size: 14px; color: #4b5563;"><b>Fecha:</b> ${new Date().toLocaleDateString(
                "es-CL"
              )}  
              <br/><b>Hora:</b> ${new Date().toLocaleTimeString("es-CL")}</p>

         
            </div>

            <!-- Footer -->
            <div style="background-color: #111827; color: #d1d5db; text-align: center; padding: 15px; font-size: 12px;">
              © ${new Date().getFullYear()} Constructora Navarro. Todos los derechos reservados.<br/>
              Este correo fue generado automáticamente desde el sitio web.
            </div>
          </div>
        </div>
      `,
    });

    //Crear el mensaje de WhatsApp
    const numeroWhatsApp = process.env.WHATSAPP_OWNER.replace("+", ""); // sin '+'
    const texto = encodeURIComponent(
      "Has recibido una solicitud de cotización en tu correo electrónico."
    );
    const whatsappLink = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;

    res.json({
      ok: true,
      message: "Correo enviado correctamente a Mailtrap con diseño visual.", 
      whatsappLink,
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({
      ok: false,
      message: "Hubo un error al enviar el correo.",
      error: error.message,
    });
  }
};

export { sendFormulario };
