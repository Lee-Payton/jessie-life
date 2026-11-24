// Leave empty until a GA4 measurement ID is ready. The loader renders only
// when this string is set.
export const GA_MEASUREMENT_ID = '';

const BOOKING_HOSTS = ['practicebetter.io', 'leadconnectorhq.com', 'msgsndr.com'];

export function isOutboundBookingUrl(url: URL): boolean {
  return BOOKING_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
}

export function isLeadFormUrl(url: URL): boolean {
  const leadHost = url.hostname.endsWith('leadconnectorhq.com') || url.hostname.endsWith('msgsndr.com');
  return leadHost && url.pathname.includes('/form');
}
