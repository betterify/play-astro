import { getCollection } from 'astro:content';

export async function GET() {
  const pages = [
    '/',
    '/about',
    '/blog',
    '/contact',
  ];

  // Include blog posts from content collection
  const posts = await getCollection('blog');
  const postUrls = posts
    .filter((p) => !p.data.draft)
    .map((p) => `/blog/${p.slug}`);

  const urls = [...pages, ...postUrls];

  const site = import.meta.env.SITE || 'https://example.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => {
      return `  <url>\n    <loc>${site}${url}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`;
    })
    .join('\n')}\n</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
