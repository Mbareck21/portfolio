import { SectionHeader } from "./SectionHeader";

const details = [
  { label: "Location", value: "Fayetteville, AR" },
  {
    label: "GitHub",
    value: "github.com/Mbareck21",
    href: "https://github.com/Mbareck21",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="04" title="Contact" />

        <p className="font-display text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl">
          Open to advanced data engineering and analytics roles. The fastest
          way to reach me is LinkedIn.
        </p>

        <a
          href="https://linkedin.com/in/lemine-mbareck"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block font-mono text-xl md:text-3xl underline underline-offset-8 decoration-1 hover:text-pine transition-colors break-all"
        >
          linkedin.com/in/lemine-mbareck &#8599;
        </a>

        <dl className="mt-16">
          {details.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 border-t border-ink/15 py-4"
            >
              <dt className="sm:col-span-3 font-mono text-xs uppercase tracking-widest text-ink/50 pt-1">
                {item.label}
              </dt>
              <dd className="sm:col-span-9 font-mono text-sm">
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="hover:text-pine transition-colors"
                  >
                    {item.value} {item.href.startsWith("http") && <>&#8599;</>}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
