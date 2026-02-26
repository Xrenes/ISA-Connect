import CTAButton from './CTAButton';

export default function CTABlock({ 
  title = "Ready to Convert More Leads?",
  description = "Book a free strategy call to see how ISA Connect can help you turn more leads into appointments.",
  variant = 'default'
}) {
  const variants = {
    default: 'bg-gray-50 border border-gray-100',
    gradient: 'gradient-bg text-white',
    dark: 'bg-[#090818] text-white',
  };

  const textColor = variant === 'default' ? 'text-[#090818]' : 'text-white';
  const descColor = variant === 'default' ? 'text-[#4E4E58]' : 'text-white/80';
  const buttonVariant = variant === 'default' ? 'primary' : 'white';

  return (
    <div className={`rounded-2xl p-8 md:p-12 text-center ${variants[variant]}`}>
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${textColor}`}>
        {title}
      </h3>
      <p className={`text-lg mb-6 max-w-2xl mx-auto ${descColor}`}>
        {description}
      </p>
      <CTAButton variant={buttonVariant}>
        Book Your Free Strategy Call
      </CTAButton>
    </div>
  );
}
