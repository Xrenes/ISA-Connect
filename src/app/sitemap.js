import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://isaconnect.com';

  // Get all blog posts
  const blogPosts = getAllPosts('blog').map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Get all portfolio/case studies
  const portfolioPosts = getAllPosts('portfolio').map((post) => ({
    url: `${baseUrl}/portfolio/${post.slug}`,
    lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogPosts, ...portfolioPosts];
}
