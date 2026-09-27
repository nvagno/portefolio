import { getNavItems, socials } from "@/lib/utils";
import { useIntl } from "react-intl";

const css = `
  .footer-a { color: rgba(255,255,255,0.7); font-family: "Questrial", sans-serif; font-size: 15px; transition: color 200ms; }
  .footer-a:hover { color: #fff; }
  .social-sm {
    width: 40px; height: 40px; border-radius: 100px;
    display: inline-flex; align-items: center; justify-content: center;
    color: #fff; background: rgba(255,255,255,0.08);
    transition: background 200ms;
  }
  .social-sm:hover { background: var(--brand-accent); }
`;

export function ContactSection() {
  const intl = useIntl();

  return (
    <>
      <style>{css}</style>

      <footer id="contacts" className="bg-[var(--brand-dark)] text-white">
        {/* CTA banner */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20">
          <div className="rounded-3xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-8 py-12 md:px-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-[Poppins] font-bold text-[28px] md:text-[36px] leading-tight">
                Let&apos;s work together!
              </h2>
              <p className="font-[Questrial] text-[16px] text-white/80 mt-2">
                {intl.formatMessage({ id: "engineer" })}
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-white text-[var(--brand)] self-start md:self-auto"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Identity */}
            <div>
              <p className="font-[Poppins] font-bold text-[22px] mb-2">
                nhm<span className="text-[var(--brand-accent)]">.</span>vagno
              </p>
              <p className="font-[Questrial] text-[15px] text-white/60 leading-relaxed">
                {intl.formatMessage({ id: "description" })}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-[Poppins] font-semibold text-[16px] mb-5">
                {intl.formatMessage({ id: "links" })}
              </p>
              <nav className="flex flex-col gap-3">
                {getNavItems(intl).map((item) => (
                  <a key={item.id} href={item.link} className="footer-a">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Follow */}
            <div>
              <p className="font-[Poppins] font-semibold text-[16px] mb-5">
                {intl.formatMessage({ id: "follow" })}
              </p>
              <div className="flex items-center gap-3 text-[16px]">
                {socials.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6">
            <p className="font-[Questrial] text-[13px] text-white/50">
              © {new Date().getFullYear()} Ny Hasina M. VAGNO —{" "}
              {intl.formatMessage({ id: "reserved" })}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
