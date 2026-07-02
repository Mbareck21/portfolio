import Image from "next/image";

const stack = ["Snowflake", "SQL", "Python", "Power BI", "Agentic AI"];
const tickerItems: string[] = Array(3).fill(stack).flat();

export function Hero() {
  return (
    <section id="home" className="section pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-y border-ink/15 flex items-stretch">
          <span className="flex shrink-0 items-center border-r border-ink/15 py-4 pr-6 font-mono text-xs uppercase tracking-widest text-ink/50">
            Core stack
          </span>
          <p className="sr-only">
            Core stack: Snowflake, SQL, Python, Power BI, Agentic AI.
          </p>
          <div className="flex-1 overflow-hidden" aria-hidden="true">
            <div className="flex w-max animate-ticker py-4 hover:[animation-play-state:paused]">
              {[0, 1].map((half) => (
                <ul key={half} className="flex shrink-0">
                  {tickerItems.map((item, i) => (
                    <li
                      key={`${half}-${i}`}
                      className="flex items-center font-mono text-sm uppercase tracking-wider text-ink/80"
                    >
                      <span className="px-6">{item}</span>
                      <span className="text-pine">&middot;</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-pine">
              Data Engineer &amp; People Leader
            </p>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight mt-5">
              Lemine Mbareck
            </h1>

            <p className="mt-10 text-xl leading-relaxed text-ink/80 max-w-2xl">
              I build enterprise data pipelines and reporting at the Walton
              Arts Center and Walmart AMP, working across Snowflake, SQL
              Server, and PostgreSQL with Python and Power BI. Before moving
              into data engineering, I spent five years supervising teams and
              running KPI-driven, federally audited programs.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-ink/80 max-w-2xl">
              I built and led a legal services program that served over 1,000
              clients with a near-perfect approval rate across hundreds of
              federal applications, work recognized with the 2024 Arkansas
              Access to Justice Award. I bring that same discipline for
              accuracy, process, and compliance to data work.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="bg-pine text-paper px-7 py-3.5 font-medium hover:bg-pine-deep transition-colors"
              >
                View projects
              </a>
              <a
                href="/Lemine-Mbareck-Resume.pdf"
                download
                className="font-mono text-sm underline underline-offset-4 decoration-1 hover:text-pine transition-colors"
              >
                Download resume (PDF) &#8595;
              </a>
              <a
                href="https://linkedin.com/in/lemine-mbareck"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 decoration-1 hover:text-pine transition-colors"
              >
                LinkedIn &#8599;
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <figure>
              <div className="relative aspect-[4/5] border border-ink/15">
                <Image
                  src="/images/profile.jpg"
                  alt="Lemine Mbareck"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition duration-700"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                  quality={90}
                />
              </div>
              <figcaption className="mt-3 flex justify-between font-mono text-xs text-ink/50">
                <span>Fayetteville, Arkansas</span>
                <span>2026</span>
              </figcaption>
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}
