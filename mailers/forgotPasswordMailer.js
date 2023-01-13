/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */

export function forgotPasswordMailer({ to, token }) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN;
  const resetUrl = `${origin}/auth/password/reset?token=${token}`;
  const msg = {
    from: "TODO@example.com",
    to,
    subject: "Instruções para redefinição da senha",
    html: `
      <h1>Recuperar sua senha</h1>
      <h3>Clique no link abaixo para recuperar sua senha </h3>

      <a href="${resetUrl}">
        Recuperar minha senha
      </a>
    `,
  };
  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer");
      } else {
        // Preview email in the browser
        const previewEmail = (await import("preview-email")).default;
        await previewEmail(msg);
      }
    },
  };
}
