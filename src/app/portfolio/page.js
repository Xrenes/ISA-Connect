import Section from "@/components/Section";
import PortfolioCard from "@/components/PortfolioCard";
import CTABlock from "@/components/CTABlock";
import { getPostMetadata } from "@/lib/mdx";

export const metadata = {
  title: "Portfolio & Case Studies",
  description: "See how ISA Connect has helped real estate teams and brokerages convert more leads into appointments and close more deals.",
};

export default function PortfolioPage() {
  const caseStudies = getPostMetadata('portfolio');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#090818] mb-4 sm:mb-6 px-2">
              Real Results for{" "}
              <span className="gradient-text block sm:inline">Real Estate Teams</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#4E4E58] px-2">
              Explore how ISA Connect has helped agents, teams, and brokerages 
              convert more leads into appointments and close more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-[#4E4E58]">
            Detailed breakdowns of how we've helped real estate professionals succeed.
          </p>
        </div>
        
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <PortfolioCard key={study.slug} caseStudy={study} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#090818] mb-4">
              Case Studies Coming Soon
            </h2>
            <p className="text-lg text-[#4E4E58] max-w-md mx-auto">
              We're documenting our client success stories. Check back soon for detailed case studies!
            </p>
          </div>
        )}
      </Section>

      {/* Testimonial placeholder */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <svg className="w-12 h-12 text-[var(--brand-purple)] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-[#090818] mb-6">
              "ISA Connect transformed our lead follow-up process. We went from chasing cold leads to 
              showing up for qualified appointments. Our conversion rate tripled in the first quarter."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mr-4">
                MJ
              </div>
              <div>
                <div className="font-semibold text-[#090818]">Michael Johnson</div>
                <div className="text-sm text-[#4E4E58]">Team Lead, Coastal Realty Group</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <CTABlock 
          variant="gradient"
          title="Ready to Be Our Next Success Story?"
          description="Book a free strategy call and discover how ISA Connect can transform your lead conversion."
        />
      </Section>
    </>
  );
}
