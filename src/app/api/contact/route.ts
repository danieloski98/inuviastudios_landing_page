import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'support@inuviastudios.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Project or learning details are required' }, { status: 400 });
    }

    const selectedService = service || 'General Inquiry';
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const dateSubmitted = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Check for API key
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Inuvia Studios Contact <onboarding@resend.dev>';
    const recipient = process.env.CONTACT_TO_EMAIL || TO_EMAIL;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry - Inuvia Studios</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F5FB; color: #0E1030; margin: 0; padding: 24px; }
    .card { background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E2E6F2; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 16px rgba(14, 16, 48, 0.06); }
    .header { background-color: #1B1F4B; padding: 28px 32px; color: #F4F5FB; }
    .logo-title { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin: 0; display: inline-block; }
    .logo-sub { color: #3DDBB0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-left: 8px; }
    .body-content { padding: 32px; }
    .badge { display: inline-block; background-color: #5B4BFF; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 12px; rounded-full; border-radius: 20px; margin-bottom: 20px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 10px 0; border-bottom: 1px solid #E2E6F2; font-size: 13px; }
    .meta-label { color: #53587A; font-weight: 600; width: 140px; }
    .meta-value { color: #0E1030; font-weight: 700; }
    .message-box { background-color: #F4F5FB; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #0E1030; white-space: pre-wrap; border: 1px solid #E2E6F2; }
    .footer { padding: 20px 32px; background-color: #F8F9FD; border-top: 1px solid #E2E6F2; font-size: 11px; color: #7A81A4; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1 class="logo-title">inuvia <span class="logo-sub">STUDIOS</span></h1>
      <p style="margin: 6px 0 0; font-size: 13px; color: #A6AECB;">New Client / Student Inquiry Received</p>
    </div>
    <div class="body-content">
      <div class="badge">${selectedService}</div>
      
      <table class="meta-table">
        <tr>
          <td class="meta-label">Client Name:</td>
          <td class="meta-value">${cleanName}</td>
        </tr>
        <tr>
          <td class="meta-label">Client Email:</td>
          <td class="meta-value"><a href="mailto:${cleanEmail}" style="color: #5B4BFF; text-decoration: none;">${cleanEmail}</a></td>
        </tr>
        <tr>
          <td class="meta-label">Offering Selected:</td>
          <td class="meta-value">${selectedService}</td>
        </tr>
        <tr>
          <td class="meta-label">Received At:</td>
          <td class="meta-value" style="font-weight: 400; color: #53587A;">${dateSubmitted} UTC</td>
        </tr>
      </table>

      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #53587A; margin: 24px 0 10px;">Inquiry / Project Details:</h3>
      <div class="message-box">${cleanMessage}</div>
    </div>
    <div class="footer">
      This inquiry was submitted from the Inuvia Studios website contact form.<br>
      Replying to this email will respond directly to <strong>${cleanEmail}</strong>.
    </div>
  </div>
</body>
</html>
    `;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const data = await resend.emails.send({
        from: fromEmail,
        to: recipient,
        replyTo: cleanEmail,
        subject: `New Inquiry from ${cleanName} [${selectedService}]`,
        html: emailHtml,
      });

      if (data.error) {
        console.error('[Inuvia Studios Contact] Resend error:', data.error);
        return NextResponse.json(
          { error: data.error.message || 'Failed to dispatch email' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Email delivered successfully',
        id: data.data?.id,
      });
    } else {
      // In development or when RESEND_API_KEY is not yet added to .env.local
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📬 [Inuvia Studios Contact Form Submission]');
      console.log(`To: ${recipient}`);
      console.log(`From Client: ${cleanName} <${cleanEmail}>`);
      console.log(`Offering: ${selectedService}`);
      console.log(`Message:\n${cleanMessage}`);
      console.log('─────────────────────────────────────────────────────');
      console.log('ℹ️ Notice: To send real emails via Resend, add:');
      console.log('RESEND_API_KEY=re_your_api_key in .env.local');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Inquiry received. Email logged (add RESEND_API_KEY in .env.local for production delivery).',
      });
    }
  } catch (error: any) {
    console.error('[Inuvia Studios Contact API Error]:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
