/** Page shell: title, optional lede, content. One page per section of the site. */
export function Page({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 md:py-16">
      <h1 className="text-[2rem] font-semibold leading-tight tracking-tight">{title}</h1>
      {lede && <p className="mt-3 max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-2">{lede}</p>}
      <div className="mt-10">{children}</div>
    </div>
  );
}

/** Sub-section heading with a strong rule, used inside pages. */
export function Subsection({
  id,
  title,
  note,
  children,
}: {
  id?: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-h` : undefined} className="scroll-mt-6">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink pb-2">
        <h2 id={id ? `${id}-h` : undefined} className="text-lg font-semibold">
          {title}
        </h2>
        {note && <p className="text-sm text-muted">{note}</p>}
      </div>
      {children}
    </section>
  );
}
