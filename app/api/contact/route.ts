import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "info@andrealanzone.it";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Andrea Lanzone <noreply@andrealanzone.it>";

type Body = { nome?: string; email?: string; cosa?: string; honeypot?: string };

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.honeypot) return NextResponse.json({ ok: true });

  const nome = (body.nome || "").trim();
  const email = (body.email || "").trim();
  const cosa = (body.cosa || "").trim();

  if (!nome || !email || !cosa) {
    return NextResponse.json({ ok: false, error: "Campi mancanti" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Email non valida" }, { status: 400 });
  }
  if (cosa.length > 5000) {
    return NextResponse.json({ ok: false, error: "Messaggio troppo lungo" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY non configurata");
    return NextResponse.json(
      { ok: false, error: "Servizio email non configurato. Scrivi direttamente a info@andrealanzone.it" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `[Sito] Nuovo contatto da ${nome}`;
  const html = `
    <h2>Nuovo contatto dal sito</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Cosa deve decidere:</strong></p>
    <p style="white-space:pre-wrap; border-left:4px solid #FF4D00; padding:8px 16px; background:#fafafa;">${escapeHtml(cosa)}</p>
    <hr/>
    <p style="font-size:12px;color:#666;">Inviato da andrealanzone.it · ${new Date().toISOString()}</p>
  `;
  const text = `Nuovo contatto dal sito\n\nNome: ${nome}\nEmail: ${email}\n\nCosa deve decidere:\n${cosa}\n\n--\nInviato da andrealanzone.it · ${new Date().toISOString()}`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Invio fallito" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("[contact] unexpected:", e);
    return NextResponse.json({ ok: false, error: "Errore inatteso" }, { status: 500 });
  }
}
