"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/profile";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-8 md:pt-14">
        <Link href="/" className="text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2rem]">
          {site.name}
        </Link>
        <p className="mt-1 text-muted">Computer vision · Geospatial machine learning · Software engineering</p>

        <nav aria-label="Main" className="mt-8">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-6">
            {nav.map((item) => {
              const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="-mb-px inline-block border-b-2 border-transparent py-2.5 text-[0.875rem] text-muted sm:text-[0.9375rem] transition-colors hover:text-ink aria-[current=page]:border-ink aria-[current=page]:font-semibold aria-[current=page]:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
