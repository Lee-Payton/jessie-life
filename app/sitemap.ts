import type { MetadataRoute } from 'next';
import { serviceAreas } from '@/lib/service-areas';
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
  const paths = [...publicRoutes, ...serviceAreas.map((area) => area.path)];
  return paths.map((path) => ({
    url: path === '/' ? siteConfig.url : `${siteConfig.url}${path}`,
  }));
}
