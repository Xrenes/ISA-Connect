export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  id = ''
}) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'gradient-bg',
    dark: 'bg-[#090818] text-white',
  };

  return (
    <section 
      id={id}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
