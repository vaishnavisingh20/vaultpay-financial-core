import nodemailer from "nodemailer";
import type { Attachment } from "nodemailer/lib/mailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,

  port: Number(process.env.SMTP_PORT),

  secure: false,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});


export async function sendEmail({
  to,
  subject,
  html,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
}) {

  await transporter.sendMail({

    from: process.env.EMAIL_FROM,

    to,

    subject,

    html,

    attachments,

  });

}