import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import BookingForm from "@/components/BookingForm";
import CTABlock from "@/components/CTABlock";

// Services data
const services = [
  {
    title: "Inbound Call Handling",
    description: "Our trained ISAs handle all incoming calls professionally, qualifying leads and scheduling appointments while you focus on closings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Outbound Calling",
    description: "Proactive outreach to your leads with personalized conversations that build trust and convert prospects into qualified appointments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21l-1.498-4.493A1 1 0 0015.28 3H5z" />
      </svg>
    ),
  },
  {
    title: "Appointment Scheduling",
    description: "We don't just make calls — we book qualified appointments directly into your calendar so you can focus on closing deals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Lead Nurturing",
    description: "Long-term leads need consistent follow-up. Our team nurtures cold leads until they're ready to act with personalized touch sequences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "CRM Follow-Up",
    description: "Seamless integration with your existing CRM systems to ensure no lead falls through the cracks and all follow-ups are tracked.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "24/7 Coverage",
    description: "Leads don't wait for business hours. Our round-the-clock team ensures you never miss an opportunity, even after hours.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Why ISA Connect
const benefits = [
  {
    title: "Built for U.S. Real Estate",
    description: "Our ISAs understand U.S. real estate markets, terminology, and buyer/seller psychology.",
  },
  {
    title: "Affordable Pricing",
    description: "Get enterprise-level ISA services at a fraction of the cost of hiring in-house.",
  },
  {
    title: "Fast Onboarding",
    description: "Go live in days, not weeks. We integrate with your CRM and start calling immediately.",
  },
  {
    title: "Performance-Focused Metrics",
    description: "We measure success by appointments booked and deals closed — not just calls made.",
  },
  {
    title: "24/7 Lead Response",
    description: "Internet leads expect instant responses. We deliver round-the-clock coverage.",
  },
];

// How it works steps
const steps = [
  {
    step: "01",
    title: "You Send Leads",
    description: "Connect your lead sources — Meta Ads, Google Ads, or Geo-Targeting Ads.",
  },
  {
    step: "02",
    title: "We Call Within Minutes",
    description: "Our trained ISAs contact every lead fast, while they're still engaged.",
  },
  {
    step: "03",
    title: "We Qualify & Book",
    description: "We identify motivated buyers/sellers and schedule appointments directly.",
  },
  {
    step: "04",
    title: "You Close More Deals",
    description: "Show up to qualified appointments and focus on what you do best — closing.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/ISA-Connect/back.jpg)'}}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-white mb-6 leading-tight">
              Turn Real Estate Leads Into Appointments —{" "}
              <span className="gradient-text">24/7</span>
            </h1>
            <p className="text-xl md:text-2xl hero-text-white mb-8 max-w-3xl mx-auto">
              Speed-to-lead response within minutes. Professional appointment setting. 
              More closings for your brokerage — without hiring more staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton>Book a Strategy Call</CTAButton>
              <CTAButton variant="outline" href="#how-it-works">
                See How It Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="light" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-4">
            Everything You Need to Convert More Leads
          </h2>
          <p className="text-lg text-[#4E4E58] max-w-2xl mx-auto">
            From first contact to booked appointment, our ISA team handles it all.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[var(--brand-purple)] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#090818] mb-2">
                {service.title}
              </h3>
              <p className="text-[#4E4E58]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why ISA Connect */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-6">
              Why Real Estate Teams Choose{" "}
              <span className="gradient-text">ISA Connect</span>
            </h2>
            <p className="text-lg text-[#4E4E58] mb-8">
              We're not a generic call center. We're specialists in real estate lead conversion, 
              built specifically for U.S. agents, teams, and brokerages.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--brand-purple)] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[#090818]">{benefit.title}</h4>
                    <p className="text-[#4E4E58] text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stats / Visual */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5min</div>
                <p className="text-sm text-[#4E4E58]">Average response time</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-sm text-[#4E4E58]">Lead coverage</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">3x</div>
                <p className="text-sm text-[#4E4E58]">More appointments</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">78%</div>
                <p className="text-sm text-[#4E4E58]">Contact rate</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="dark" id="how-it-works">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Getting started with ISAConnect is simple. Here&apos;s your path to more appointments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-white/10 mb-4">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {/* Connector line (hidden on mobile and for steps 02, 03, 04) */}
              {index < steps.length - 1 && index === 0 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-pink)] opacity-30"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CTAButton variant="white">Start Converting More Leads</CTAButton>
        </div>
      </Section>

      {/* ROI / Missed Opportunity Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-6">
            The Cost of Missing Leads Is Higher Than You Think
          </h2>
          <p className="text-lg text-[#4E4E58] mb-8">
            Studies show that responding to a lead within 5 minutes makes you{" "}
            <strong className="text-[#090818]">21x more likely</strong> to qualify them. 
            After 30 minutes, your chances drop by 90%.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">90%</div>
                <p className="text-sm text-[#4E4E58]">of leads never get a callback</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--brand-purple)] mb-2">5 min</div>
                <p className="text-sm text-[#4E4E58]">optimal response window</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$15K+</div>
                <p className="text-sm text-[#4E4E58]">avg. commission at risk per lead</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-[#4E4E58] mb-6">
            Every hour without professional lead follow-up is money left on the table. 
            ISA Connect ensures <strong className="text-[#090818]">every lead gets contacted fast</strong>.
          </p>
          
          <CTAButton>Stop Losing Leads — Book a Call</CTAButton>
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section background="light" id="book-call">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090818] mb-4">
              Ready to Convert More Leads?
            </h2>
            <p className="text-lg text-[#4E4E58] mb-6">
              Book a free strategy call and discover how ISA Connect can help your team 
              set more appointments and close more deals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[var(--brand-purple)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#4E4E58]">No long-term contracts required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[var(--brand-purple)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#4E4E58]">Custom pricing based on your volume</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[var(--brand-purple)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#4E4E58]">Go live in 48 hours or less</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-[#4E4E58]">
                <strong className="text-[#090818]">Questions?</strong> Reach us directly at{" "}
                <a href="mailto:hello@isaconnect.com" className="text-[var(--brand-purple)] hover:underline">
                  hello@isaconnect.com
                </a>{" "}
                or call{" "}
                <a href="tel:+13235777064" className="text-[var(--brand-purple)] hover:underline">
                  +1 (323) 577-7064
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#090818] mb-6">
              Book Your Free Strategy Call
            </h3>
            <BookingForm />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="white">
        <CTABlock 
          variant="gradient"
          title="Stop Losing Leads. Start Booking Appointments."
          description="Join hundreds of real estate teams who trust ISA Connect to convert their internet leads into closed deals."
        />
      </Section>
    </>
  );
}
