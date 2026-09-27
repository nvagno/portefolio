import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useIntl } from "react-intl";
import { useMobile } from "@/hooks/use-mobile";
import { cn, getNavItems } from "@/lib/utils";

const css = `
  .nav-a {
    color: var(--ink);
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    transition: color 200ms;
  }
  .nav-a:hover { color: var(--brand); }
  .lang-btn {
    background: none; border: none; cursor: pointer; padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 12px; font-weight: 600;
    color: #8F8F8F; transition: color 200ms;
  }
  .lang-btn:hover, .lang-btn.on { color: var(--brand); }
  .lang-btn:disabled { cursor: not-allowed; opacity: 0.5; }
  .mobile-a {
    display: flex; align-items: center; gap: 16px;
    color: var(--ink); font-family: "Poppins", sans-serif;
    font-size: 16px; font-weight: 500;
    transition: color 200ms;
  }
  .mobile-a:hover { color: var(--brand); }
`;

export function NavigationMenuSection({
  setLocale,
}: {
  setLocale: (lc: "en" | "fr") => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const isMobile = useMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{css}</style>

      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur shadow-[0_4px_24px_-12px_rgba(83,53,152,0.25)] py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-[Poppins] font-bold text-[20px] text-[var(--ink)]"
          >
            nhm<span className="text-[var(--brand-accent)]">.</span>vagno
          </a>

          {/* Desktop */}
          {!isMobile && (
            <>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-7">
                  {getNavItems(intl).map((item) => (
                    <NavigationMenuItem key={item.id}>
                      <a href={item.link} className="nav-a">
                        {item.label}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-[6px]">
                <button
                  onClick={() => setLocale("en")}
                  className={cn("lang-btn", intl.locale === "en" && "on")}
                >
                  EN
                </button>
                <span className="text-[var(--line)] select-none text-[12px]">
                  /
                </span>
                <button
                  onClick={() => setLocale("fr")}
                  className={cn("lang-btn", intl.locale === "fr" && "on")}
                  disabled
                >
                  FR
                </button>
              </div>
            </>
          )}

          {/* Mobile */}
          {isMobile && (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px]">
                <button
                  onClick={() => setLocale("en")}
                  className={cn("lang-btn", intl.locale === "en" && "on")}
                >
                  EN
                </button>
                <span className="text-[var(--line)] select-none text-[12px]">
                  /
                </span>
                <button
                  onClick={() => setLocale("fr")}
                  className={cn("lang-btn", intl.locale === "fr" && "on")}
                  disabled
                >
                  FR
                </button>
              </div>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={intl.formatMessage({ id: "home" })}
                className="flex flex-col gap-[5px] w-5"
              >
                <span
                  className="block h-px bg-[var(--ink)] w-full transition-all duration-200"
                  style={{
                    transform: open ? "rotate(45deg) translateY(6px)" : "none",
                  }}
                />
                <span
                  className="block h-px bg-[var(--ink)] w-full transition-all duration-200"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="block h-px bg-[var(--ink)] transition-all duration-200"
                  style={{
                    width: open ? "100%" : "60%",
                    transform: open
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        {/* Mobile drawer */}
        {isMobile && (
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open ? "360px" : "0" }}
          >
            <nav className="px-6 pb-7 pt-5 border-t border-[var(--line)] space-y-5 bg-white">
              {getNavItems(intl).map((item, i) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="mobile-a"
                >
                  <span className="text-[12px] text-[var(--brand-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
