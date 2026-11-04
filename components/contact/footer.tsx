import { links, site } from "@/content/profile";
import { Icon } from "@/components/icons/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.fullName}</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-ink">
              <Icon name="email" className="size-[18px]" />
            </a>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-label={l.label} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                <Icon name={l.icon} className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
