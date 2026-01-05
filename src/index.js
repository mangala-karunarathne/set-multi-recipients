exports.buildRecipients = async ({ to, cc, bcc, subject }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const buildRecipients = (emails = "") =>
    emails
      .split(",")
      .map((e) => e.trim())
      .filter((e) => emailRegex.test(e))
      .map((e) => ({
        emailAddress: { address: e },
      }));

  return {
    subject: subject,
    toRecipients: buildRecipients(to),
    ccRecipients: buildRecipients(cc),  
    bccRecipients: buildRecipients(bcc),
  };
};
