interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, subtitle, children, className = '' }: CardProps) {
  return (
    <article
      className={`flex flex-col bg-surface border border-border rounded-xl p-6 md:p-8 transition-colors ${className}`}
    >
      <header className="mb-4">
        <h3 className="text-base md:text-xl lg:text-2xl font-medium leading-snug text-surface-contrast text-balance">
          {title}
        </h3>
        {subtitle && (
          <span className="mt-1 text-xs md:text-sm font-normal leading-normal text-muted-contrast text-pretty">
            {subtitle}
          </span>
        )}
      </header>
      <div className="flex-1">{children}</div>
    </article>
  );
}
