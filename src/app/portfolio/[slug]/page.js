import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Section from "@/components/Section";
import CTABlock from "@/components/CTABlock";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getAllPosts('portfolio');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'portfolio');
  
  if (!post) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} - Case Study`,
    description: post.frontmatter.excerpt || post.frontmatter.description,
    openGraph: {
      title: `${post.frontmatter.title} - Case Study`,
      description: post.frontmatter.excerpt || post.frontmatter.description,
      type: 'article',
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
};

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'portfolio');

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
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[var(--brand-magenta)] bg-pink-50 rounded-full mb-4">
              Case Study
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#090818] mb-4">
              {frontmatter.title}
            </h1>
            {frontmatter.client && (
              <p className="text-xl text-[var(--brand-purple)] font-medium">
                {frontmatter.client}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      {frontmatter.metric && (
        <Section background="dark">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {frontmatter.metric}
              </div>
              <p className="text-gray-400">Key Achievement</p>
            </div>
            {frontmatter.responseTime && (
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {frontmatter.responseTime}
                </div>
                <p className="text-gray-400">Response Time</p>
              </div>
            )}
            {frontmatter.appointmentsBooked && (
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {frontmatter.appointmentsBooked}
                </div>
                <p className="text-gray-400">Appointments Booked</p>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Overview Cards */}
      <Section background="light">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {frontmatter.problem && (
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#090818] mb-2 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 text-sm">!</span>
                The Problem
              </h3>
              <p className="text-[#4E4E58]">{frontmatter.problem}</p>
            </div>
          )}
          {frontmatter.solution && (
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#090818] mb-2 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">→</span>
                Our Solution
              </h3>
              <p className="text-[#4E4E58]">{frontmatter.solution}</p>
            </div>
          )}
          {frontmatter.result && (
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#090818] mb-2 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 text-sm">✓</span>
                The Results
              </h3>
              <p className="text-[#4E4E58]">{frontmatter.result}</p>
            </div>
          )}
        </div>
      </Section>

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
          title="Want Similar Results for Your Team?"
          description="Book a free strategy call and discover how ISA Connect can transform your lead conversion."
        />
      </Section>
    </>
  );
}
