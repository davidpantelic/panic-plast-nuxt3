export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, message } = body;

  // Validate form data
  // if (!name || !email || !message) {
  //   return {
  //     statusCode: 400,
  //     message: 'Invalid form data',
  //   };
  // }

  // Set your Mailgun API key and domain
  const MAILGUN_API_KEY = process.env.MAILGUN_API;
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

  const mailgunUrl = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  // Prepare the email data using URLSearchParams
  const emailData = new URLSearchParams();
  emailData.append('from', `Contact Form <postmaster@${MAILGUN_DOMAIN}>`);
  emailData.append('to', 'panicplast@gmail.com');
  emailData.append('h:Reply-To', email);
  emailData.append('subject', `New message from ${name}`);
  emailData.append('text', message || 'Poruka nije uneta.');

  try {
    const response = await $fetch(mailgunUrl, {
      method: 'POST',
      body: emailData.toString(),
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return {
      statusCode: 200,
      message: 'Poruka je uspešno poslata.',
      data: response,
    };
  } catch (error) {
    console.error("Mailgun API error:", error);
    return {
      statusCode: 500,
      message: 'Failed to send email',
      error: error.data || error.message,
    };
  }
});
