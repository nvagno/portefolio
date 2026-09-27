import { useIntl } from "react-intl";
import { socials } from "@/lib/utils";

const css = `
  .social-a {
    width: 40px; height: 40px; border-radius: 100px;
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--brand); background: var(--brand-soft);
    transition: background 200ms, color 200ms;
  }
  .social-a:hover { background: var(--brand); color: #fff; }
`;

export function HeroSection() {
  const intl = useIntl();

  const comments: string[] = [
    intl.formatMessage({ id: "comment1" }),
    intl.formatMessage({ id: "comment2" }),
    intl.formatMessage({ id: "comment3" }),
    intl.formatMessage({ id: "comment4" }),
  ];

  return (
    <>
      <style>{css}</style>

      <main id="home" className="bg-white relative overflow-hidden">
        {/* Soft background shape */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[var(--brand-soft)]"
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14 items-center">
            {/* Identity */}
            <div className="order-2 md:order-1 space-y-6">
              <p className="eyebrow">{intl.formatMessage({ id: "hello" })}</p>
              <h1 className="title-text">
                Ny Hasina M. <span className="text-[var(--brand)]">VAGNO</span>
              </h1>
              <p className="font-[Poppins] font-semibold text-[18px] text-[var(--ink)]">
                {intl.formatMessage({ id: "engineer" })}
              </p>

              <div className="space-y-3">
                <p className="content-text">
                  {intl.formatMessage({ id: "description" })}
                </p>
                <p className="content-text">
                  {intl.formatMessage({ id: "speciality" })}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary"
                >
                  Download CV
                </a>
                <a href="#contacts" className="btn-pill btn-outline">
                  {intl.formatMessage({ id: "contacts" })}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {socials.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-a"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-gradient-to-br from-[var(--brand)] to-[var(--brand-accent)]"
                />
                <img
                  src="banner.png"
                  alt="Ny Hasina M. VAGNO"
                  className="relative w-64 md:w-80 rounded-[32px] shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-16">
            {comments.map((c) => (
              <span
                key={c}
                className="font-[Questrial] text-[14px] text-[var(--brand)] bg-[var(--brand-soft)] rounded-full px-5 py-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
