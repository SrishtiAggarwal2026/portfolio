/**
 * FormSubmit.co — set `NEXT_PUBLIC_FORMSUBMIT_EMAIL` in `.env.local` to the inbox that should receive mail.
 * Optional: `NEXT_PUBLIC_SITE_URL` (e.g. https://yoursite.org) so submitters return to /contact?sent=1 after send.
 */
export function getFormSubmitActionUrl(): string | null {
  const email = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim();
  if (!email) return null;
  return `https://formsubmit.co/${encodeURIComponent(email)}`;
}

export function getFormSubmitThankYouUrl(): string | null {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.trim()?.replace(/\/$/, "");
  if (!base) return null;
  return `${base}/contact?sent=1`;
}
