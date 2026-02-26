import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import CTABlock from "@/components/CTABlock";
import { getPostMetadata } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Expert insights on real estate lead conversion, ISA best practices, speed-to-lead strategies, and appointment setting tips from ISA Connect.",
};

export default function BlogPage() {
  const posts = getPostMetadata('blog');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#090818] mb-6">
              Real Estate Lead Conversion{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-[#4E4E58]">
              Expert tips, strategies, and best practices for converting more real estate 
              leads into appointments and closed deals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <Section background="white">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#090818] mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-lg text-[#4E4E58] max-w-md mx-auto">
              We're working on bringing you valuable content about real estate lead conversion. 
              Check back soon!
            </p>
          </div>
        )}
      </Section>

      {/* Topics Section */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4">
            Topics We Cover
          </h2>
          <p className="text-lg text-[#4E4E58]">
            Insights to help you master every aspect of real estate lead conversion.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Speed-to-Lead",
            "Appointment Setting",
            "Lead Qualification",
            "ISA Best Practices",
            "CRM Optimization",
            "Conversion Metrics",
            "Script Templates",
            "Follow-Up Sequences",
          ].map((topic) => (
            <div 
              key={topic}
              className="px-4 py-3 bg-white rounded-lg border border-gray-100 text-center hover:border-[var(--brand-purple)] transition-colors"
            >
              <span className="text-[#4E4E58] font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <CTABlock 
          variant="gradient"
          title="Want Personalized Lead Conversion Advice?"
          description="Book a free strategy call and get customized recommendations for your real estate business."
        />
      </Section>
    </>
  );
}
