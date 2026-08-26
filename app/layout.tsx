import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "./components/core/JsonLd";
import { siteUrl, orgId, websiteId } from "./lib/site";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const title = "dingu.org — an index of projects";
const description =
  "An index of projects cultivated by or with dingu.org — small experiments, some grown into tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "dingu.org",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexMono.variable} bg-paper`}>
      <body className="bg-paper font-sans text-black antialiased [font-synthesis-weight:none]">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": orgId,
                name: "dingu.org",
                url: siteUrl,
                logo: `${siteUrl}/brand/logo.svg`,
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: "dingu.org",
                url: siteUrl,
                publisher: { "@id": orgId },
              },
            ],
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
