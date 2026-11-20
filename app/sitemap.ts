import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

/**
 * Public pages. Left out of the sitemap:
 * - /api/* route handlers
 * - /metabolism/next-steps (post-booking confirmation)
 * - /reboot/apply (noindex application form)
 */
const publicRoutes = [
  '/',
  '/about',
  '/audit',
  '/booking-policy',
  '/disclaimer',
  '/faq',
  '/host',
  '/host-guide',
  '/lab',
  '/locations',
  '/metabolism',
  '/privacy',
  '/reboot',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: path === '/' ? siteConfig.url : `${siteConfig.url}${path}`,
  }));
}
