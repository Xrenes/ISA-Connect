import Link from 'next/link';

export default function BlogCard({ post }) {
  const { slug, title, excerpt, date, readTime, category } = post;

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[var(--brand-purple)] hover:shadow-lg transition-all group">
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[var(--brand-purple)] bg-purple-50 rounded-full mb-3">
            {category}
          </span>
        )}
        
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-[#090818] mb-3 group-hover:text-[var(--brand-purple)] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-[#4E4E58] mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-[#4E4E58]">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
          {readTime && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} min read
            </span>
          )}
        </div>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center mt-4 text-[var(--brand-purple)] font-semibold hover:text-[var(--brand-pink)] transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
