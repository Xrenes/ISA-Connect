'use client';

export default function CTAButton({ 
  children = 'Book a Call', 
  href = 'https://calendly.com/isaconnectdiscoverycall/30min', 
  variant = 'primary',
  className = '',
  onClick
}) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'gradient-bg text-white hover:opacity-90 hover:scale-105 shadow-lg',
    outline: 'border-2 border-[var(--brand-purple)] text-[var(--brand-purple)] hover:bg-[var(--brand-purple)] hover:text-white',
    white: 'bg-white text-[var(--brand-purple)] hover:bg-gray-100 shadow-lg',
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      <svg 
        className="ml-2 w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
