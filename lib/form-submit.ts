export const DEFAULT_FORMSUBMIT_EMAIL = "ashiaggarwal1482@gmail.com";

/**
 * FormSubmit.co — sends submissions directly to ashiaggarwal1482@gmail.com.
 */
export function getFormSubmitActionUrl(): string {
  const email = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim() || DEFAULT_FORMSUBMIT_EMAIL;
  return `https://formsubmit.co/${encodeURIComponent(email)}`;
}

export function getFormSubmitThankYouUrl(): string | null {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.trim()?.replace(/\/$/, "");
  if (!base) return null;
  return `${base}/contact?sent=1`;
}
