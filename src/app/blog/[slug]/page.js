import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Section from "@/components/Section";
import CTABlock from "@/components/CTABlock";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt || post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt || post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || 'ISA Connect'],
    },
  };
}

// Custom MDX components
const components = {
  h1: (props) => <h1 className="text-3xl md:text-4xl font-bold text-[#090818] mb-6 mt-8" {...props} />,
  h2: (props) => <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4 mt-8" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold text-[#090818] mb-3 mt-6" {...props} />,
  p: (props) => <p className="text-[#4E4E58] mb-4 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-4 text-[#4E4E58] space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-4 text-[#4E4E58] space-y-2" {...props} />,
  li: (props) => <li className="text-[#4E4E58]" {...props} />,
  a: (props) => <a className="text-[var(--brand-purple)] hover:underline" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-[var(--brand-purple)] pl-4 my-6 italic text-[#4E4E58]" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-[#090818]" {...props} />,
  code: (props) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props} />,
  pre: (props) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            {frontmatter.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[var(--brand-purple)] bg-purple-50 rounded-full mb-4">
                {frontmatter.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#090818] mb-6">
              {frontmatter.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-[#4E4E58]">
              {frontmatter.date && (
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {frontmatter.readTime && (
                <>
                  <span>•</span>
                  <span>{frontmatter.readTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <article className="max-w-3xl mx-auto prose prose-lg">
          <MDXRemote source={content} components={components} />
        </article>
      </Section>

      {/* CTA */}
      <Section background="light">
        <CTABlock 
          variant="gradient"
          title="Ready to Improve Your Lead Conversion?"
          description="Book a free strategy call and discover how ISA Connect can help you convert more leads into appointments."
        />
      </Section>
    </>
  );
}
