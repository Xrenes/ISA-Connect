import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#090818] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#4E4E58] mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base border-2 border-[var(--brand-purple)] text-[var(--brand-purple)] hover:bg-[var(--brand-purple)] hover:text-white transition-all"
          >
            Go Home
          </Link>
          <CTAButton>Book a Call</CTAButton>
        </div>
      </div>
    </div>
  );
}
