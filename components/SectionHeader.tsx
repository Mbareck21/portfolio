export function SectionHeader({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-baseline gap-5 border-t-2 border-ink pt-5">
        <span className="font-mono text-sm text-pine">{index}</span>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">
          {title}
        </h2>
      </div>
      {lede && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          {lede}
        </p>
      )}
    </div>
  );
}
