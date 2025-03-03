import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, number, message } = await req.json();

    if (!name || !email || !message || !number) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    await resend.emails.send({
      from: "no-reply@eduardobrito.dev",
      to: "contato@eduardobrito.dev",
      subject: "📩 Nova mensagem do formulário de contato",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #222;">📩 Nova mensagem de contato</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="background: #f4f4f4; padding: 10px; font-weight: bold;">Nome:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="background: #f4f4f4; padding: 10px; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr>
              <td style="background: #f4f4f4; padding: 10px; font-weight: bold;">WhatsApp:</td>
              <td style="padding: 10px;">${number}</td>
            </tr>
            <tr>
              <td style="background: #f4f4f4; padding: 10px; font-weight: bold;">Mensagem:</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>

          <p style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" style="background: #222; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
              Responder por e-mail
            </a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (errorObj) {
    console.error("Erro ao enviar email:", errorObj);
    return NextResponse.json({ error: "Erro ao enviar o e-mail" }, { status: 500 });
  }
}
