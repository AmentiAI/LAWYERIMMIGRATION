import { Resend } from "resend";
import { siteConfig } from "./constants";

export interface AppointmentEmailInput {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  appointmentDate: string;
  appointmentTime: string;
  durationMinutes: number;
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function formatWhen(date: string, time: string, durationMinutes: number): string {
  const day = new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const [h, m] = time.slice(0, 5).split(":").map(Number);
  const hour = h % 12 || 12;
  const ampm = h >= 12 ? "PM" : "AM";
  const length = durationMinutes === 60 ? "1 hour" : `${durationMinutes} min`;
  return `${day} at ${hour}:${String(m).padStart(2, "0")} ${ampm} (${length})`;
}

function officeBody(input: AppointmentEmailInput): string {
  const when = formatWhen(input.appointmentDate, input.appointmentTime, input.durationMinutes);
  return [
    "New consultation request from the website.",
    "",
    `Name: ${oneLine(input.name)}`,
    `Email: ${oneLine(input.email)}`,
    `Phone: ${input.phone ? oneLine(input.phone) : "Not provided"}`,
    `Subject: ${input.subject ? oneLine(input.subject) : "Consultation"}`,
    `Requested time: ${when}`,
    "",
    "Message:",
    input.message.trim(),
    "",
    "This request is also saved in the admin appointments list.",
    "Reply to this email to respond to the client.",
  ].join("\n");
}

function clientBody(input: AppointmentEmailInput): string {
  const when = formatWhen(input.appointmentDate, input.appointmentTime, input.durationMinutes);
  return [
    `Hello ${oneLine(input.name)},`,
    "",
    `We received your consultation request for ${when}.`,
    "Attorney Goncalves will confirm the appointment by email within one business day.",
    "",
    "If you need to reach the office sooner:",
    `Phone: ${siteConfig.phone}`,
    `Email: ${siteConfig.email}`,
    "",
    "Sending this request does not create an attorney-client relationship.",
    "",
    siteConfig.name,
    siteConfig.address.full,
  ].join("\n");
}

/** Notify the office and send the client a confirmation. Booking still succeeds if mail fails. */
export async function sendAppointmentEmails(
  input: AppointmentEmailInput
): Promise<{ office: boolean; client: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;

  if (!apiKey || !from) {
    console.error(
      "Appointment saved, but email was not sent. Set RESEND_API_KEY and RESEND_FROM_EMAIL."
    );
    return { office: false, client: false, error: "Email is not configured" };
  }

  const resend = new Resend(apiKey);
  const subject = input.subject
    ? `Consultation request: ${oneLine(input.subject)}`
    : "Consultation request from the website";
  const replyTo = oneLine(input.email);

  let office = false;
  let client = false;
  let error: string | undefined;

  try {
    const officeResult = await resend.emails.send({
      from,
      to: [to],
      replyTo,
      subject,
      text: officeBody(input),
    });
    if (officeResult.error) {
      error = officeResult.error.message;
      console.error("Resend office email failed:", officeResult.error);
    } else {
      office = true;
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "Office email failed";
    console.error("Resend office email failed:", err);
  }

  try {
    const clientResult = await resend.emails.send({
      from,
      to: [replyTo],
      replyTo: to,
      subject: `We received your consultation request — ${siteConfig.name}`,
      text: clientBody(input),
    });
    if (clientResult.error) {
      error = error || clientResult.error.message;
      console.error("Resend client email failed:", clientResult.error);
    } else {
      client = true;
    }
  } catch (err) {
    error = error || (err instanceof Error ? err.message : "Client email failed");
    console.error("Resend client email failed:", err);
  }

  return { office, client, error };
}
