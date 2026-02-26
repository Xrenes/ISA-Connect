import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import CTABlock from "@/components/CTABlock";

export const metadata = {
  title: "Services",
  description: "ISA Connect offers outbound prospecting, appointment setting, speed-to-lead follow-up, lead qualification, lead nurturing, and 24/7 coverage for real estate agents.",
};

const services = [
  {
    id: "prospecting",
    title: "Outbound Prospecting",
    description: "Our trained Inside Sales Agents proactively reach out to your leads with personalized, professional conversations that build trust and rapport.",
    features: [
      "Personalized call scripts tailored to your market",
      "Multiple contact attempts across different times",
      "Voicemail and text follow-up sequences",
      "CRM integration for seamless tracking",
      "Real-time reporting on contact rates",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: "appointments",
    title: "Appointment Setting",
    description: "We don't just make calls — we book qualified appointments directly into your calendar so you can focus on what you do best: closing deals.",
    features: [
      "Direct calendar integration (Google, Outlook, etc.)",
      "Confirmation calls and reminders",
      "Pre-qualification before booking",
      "Rescheduling management",
      "No-show follow-up protocols",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "speed-to-lead",
    title: "Speed-to-Lead Follow-Up",
    description: "Internet leads have a short attention span. We contact your new leads within minutes — not hours — dramatically increasing your conversion rates.",
    features: [
      "Response within 5 minutes of lead submission",
      "24/7 immediate response capability",
      "Instant CRM notifications",
      "Multi-channel outreach (call, text, email)",
      "Lead source-specific scripts",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "qualification",
    title: "Lead Qualification",
    description: "Not all leads are created equal. Our ISAs identify buyer/seller motivation, timeline, budget, and pre-approval status before passing qualified leads to you.",
    features: [
      "BANT qualification (Budget, Authority, Need, Timeline)",
      "Motivation scoring",
      "Pre-approval verification",
      "Property preference documentation",
      "Hot/warm/cold lead categorization",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "nurturing",
    title: "Lead Nurturing",
    description: "Long-term leads need consistent, patient follow-up. Our team stays in touch with cold leads until they're ready to act — so you don't have to.",
    features: [
      "Long-term drip campaigns",
      "Periodic check-in calls",
      "Market update communications",
      "Re-engagement sequences",
      "Lead reactivation protocols",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "coverage",
    title: "24/7 Coverage",
    description: "Leads don't wait for business hours, and neither do we. Our round-the-clock team ensures you never miss an opportunity, even at 2 AM.",
    features: [
      "True 24/7/365 coverage",
      "Weekend and holiday support",
      "After-hours lead response",
      "Time zone optimization",
      "Overflow call handling",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#090818] mb-6">
              Real Estate ISA Services Built for{" "}
              <span className="gradient-text">Results</span>
            </h1>
            <p className="text-xl text-[#4E4E58] mb-8">
              From first contact to booked appointment, our comprehensive ISA services 
              cover every step of your lead conversion process.
            </p>
            <CTAButton>Get Started Today</CTAButton>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id} 
          background={index % 2 === 0 ? "white" : "light"}
        >
          <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-[#4E4E58] mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--brand-purple)] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#4E4E58]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold gradient-text mb-2">{service.title}</h3>
                <p className="text-[#4E4E58]">Professional, trained ISAs ready to represent your brand.</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Pricing Philosophy */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transparent, Performance-Based Pricing
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We believe in pricing that aligns our success with yours. That's why we offer 
            flexible plans based on your lead volume and specific needs — not one-size-fits-all packages.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Solo Agents</h3>
              <p className="text-gray-400">Perfect for individual agents managing their own lead flow.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-[var(--brand-purple)]">
              <h3 className="text-xl font-bold text-white mb-2">Teams</h3>
              <p className="text-gray-400">Scalable solutions for real estate teams of any size.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Brokerages</h3>
              <p className="text-gray-400">Enterprise solutions for high-volume operations.</p>
            </div>
          </div>
          <CTAButton variant="white">Get Custom Pricing</CTAButton>
        </div>
      </Section>

      {/* CRM Integrations */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-4">
            Integrates With Your Existing Tools
          </h2>
          <p className="text-lg text-[#4E4E58] max-w-2xl mx-auto">
            ISA Connect works seamlessly with the CRMs and lead sources you already use.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[#4E4E58] font-medium">
          {["Follow Up Boss", "Chime", "KV Core", "Sierra Interactive", "BoomTown", "Real Geeks", "LionDesk", "Salesforce"].map((tool) => (
            <div key={tool} className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-100">
              {tool}
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="light">
        <CTABlock 
          variant="gradient"
          title="Ready to Supercharge Your Lead Conversion?"
          description="Book a free strategy call to discover which ISA services are right for your business."
        />
      </Section>
    </>
  );
}
