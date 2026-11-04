import type { Metadata, Viewport } from "next";
import { Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site, links } from "@/content/profile";
import { SiteHeader } from "@/components/navigation/menu";
import { SiteFooter } from "@/components/contact/footer";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = `${site.name}: Computer Vision & Geospatial Machine Learning`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.fullName, url: site.url }],
  alternates: { canonical: "/" },
  icons: { icon: "/photo.jpeg" },
  openGraph: {
    type: "profile",
    url: site.url,
    title,
    description: site.description,
    images: [{ url: site.portrait, width: 1254, height: 1254, alt: site.name }],
  },
  twitter: { card: "summary", title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  jobTitle: "Computer Science Engineering Student",
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "HEI" }],
  affiliation: { "@type": "CollegeOrUniversity", name: "ESIROI, Université de La Réunion" },
  knowsAbout: [
    "Computer vision",
    "Remote sensing",
    "Geospatial machine learning",
    "Software architecture",
  ],
  sameAs: links.map((l) => l.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7ZLX6T7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7ZLX6T7');`}
        </Script>
      </body>
    </html>
  );
}
