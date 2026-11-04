import { links, site } from "@/content/profile";
import { Icon } from "@/components/icons/icons";
import { Page } from "@/components/section/section";

export function ContactSection() {
  const rows = [
    { label: "Email", href: `mailto:${site.email}`, text: site.email, icon: "email" as const, external: false },
    ...links.map((l) => ({ label: l.label, href: l.href, text: l.handle, icon: l.icon, external: true })),
  ];

  return (
    <Page
      title="Contact"
      lede="I welcome conversations about research positions, R&D projects and collaborations in computer vision, remote sensing and ML systems. Email is the most reliable way to reach me."
    >
      <dl className="max-w-xl divide-y divide-rule border-y border-rule">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-4 py-3.5">
            <dt className="flex items-center gap-2.5 text-ink-2">
              <Icon name={r.icon} className="size-[18px] text-muted" />
              {r.label}
            </dt>
            <dd className="min-w-0 truncate">
              <a
                href={r.href}
                className="link"
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {r.text}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-[64ch] text-ink-2">{site.seeking}</p>
    </Page>
  );
}
