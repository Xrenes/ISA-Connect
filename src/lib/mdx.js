import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(type = 'blog') {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  return fs.readdirSync(directory).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug, type = 'blog') {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  };
}

export function getAllPosts(type = 'blog') {
  const slugs = getPostSlugs(type);
  
  const posts = slugs
    .map(slug => getPostBySlug(slug, type))
    .filter(post => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0);
      const dateB = new Date(b.frontmatter.date || 0);
      return dateB - dateA;
    });

  return posts;
}

export function getPostMetadata(type = 'blog') {
  const posts = getAllPosts(type);
  
  return posts.map(post => ({
    slug: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt || post.frontmatter.description,
    date: post.frontmatter.date,
    readTime: post.frontmatter.readTime,
    category: post.frontmatter.category,
    client: post.frontmatter.client,
    problem: post.frontmatter.problem,
    result: post.frontmatter.result,
    metric: post.frontmatter.metric,
  }));
}
