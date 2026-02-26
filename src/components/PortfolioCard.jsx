import Link from 'next/link';

export default function PortfolioCard({ caseStudy }) {
  const { slug, title, client, problem, result, metric } = caseStudy;

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[var(--brand-purple)] hover:shadow-lg transition-all group">
      <div className="h-2 gradient-bg"></div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[var(--brand-magenta)] bg-pink-50 rounded-full mb-3">
          Case Study
        </span>
        
        <Link href={`/portfolio/${slug}`}>
          <h3 className="text-xl font-bold text-[#090818] mb-2 group-hover:text-[var(--brand-purple)] transition-colors">
            {title}
          </h3>
        </Link>
        
        {client && (
          <p className="text-sm text-[var(--brand-purple)] font-medium mb-3">
            {client}
          </p>
        )}
        
        <p className="text-[#4E4E58] mb-4 line-clamp-2">
          {problem}
        </p>
        
        {/* Result highlight */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#4E4E58]">Key Result:</span>
            <span className="text-lg font-bold gradient-text">{metric}</span>
          </div>
          {result && (
            <p className="text-sm text-[#4E4E58] mt-1">{result}</p>
          )}
        </div>
        
        <Link 
          href={`/portfolio/${slug}`}
          className="inline-flex items-center text-[var(--brand-purple)] font-semibold hover:text-[var(--brand-pink)] transition-colors"
        >
          View Case Study
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
