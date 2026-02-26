import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with ISA Connect. Book a strategy call or reach out directly. We respond within 1 business hour.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#090818] mb-6">
              Let's Talk About Your{" "}
              <span className="gradient-text">Lead Conversion</span>
            </h1>
            <p className="text-xl text-[#4E4E58]">
              Ready to convert more leads into appointments? Book a free strategy call 
              or reach out directly. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-[#4E4E58] mb-8">
              Whether you're a solo agent, team leader, or brokerage owner, we'd love to 
              learn about your lead generation challenges and show you how ISA Connect can help.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#090818] mb-1">Email Us</h3>
                  <a 
                    href="mailto:hello@isaconnect.com" 
                    className="text-[var(--brand-purple)] hover:underline text-lg"
                  >
                    hello@isaconnect.com
                  </a>
                  <p className="text-sm text-[#4E4E58] mt-1">We respond within 1 business hour</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#090818] mb-1">Call Us</h3>
                  <a 
                    href="tel:+13235777064" 
                    className="text-[var(--brand-purple)] hover:underline text-lg"
                  >
                    +1 (323) 577-7064
                  </a>
                  <p className="text-sm text-[#4E4E58] mt-1">Available during business hours</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#090818] mb-1">24/7 Lead Response</h3>
                  <p className="text-[#4E4E58]">
                    Once you're a client, our ISA team is available 24/7 to respond to your leads.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#090818] mb-4">Common Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#090818]">How quickly can we get started?</h4>
                  <p className="text-sm text-[#4E4E58]">Most clients are live within 48-72 hours.</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#090818]">Do you require long-term contracts?</h4>
                  <p className="text-sm text-[#4E4E58]">No. We offer month-to-month flexibility.</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#090818]">What CRMs do you integrate with?</h4>
                  <p className="text-sm text-[#4E4E58]">Follow Up Boss, Chime, KV Core, and many more.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#090818] mb-2">
              Book Your Free Strategy Call
            </h3>
            <p className="text-[#4E4E58] mb-6">
              Fill out the form below and we'll be in touch to schedule your personalized consultation.
            </p>
            <BookingForm />
          </div>
        </div>
      </Section>

      {/* Map/Location placeholder - if needed */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4">
            Serving Real Estate Professionals Nationwide
          </h2>
          <p className="text-lg text-[#4E4E58] mb-6">
            ISA Connect serves real estate agents, teams, and brokerages across all 50 states. 
            Our ISAs are trained specifically in U.S. real estate markets and practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#4E4E58]">
            {["California", "Texas", "Florida", "New York", "Arizona", "Colorado", "Georgia", "North Carolina", "All 50 States"].map((state) => (
              <span key={state} className="px-3 py-1 bg-white rounded-full border border-gray-200">
                {state}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
