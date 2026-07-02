import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-drab-nine-66.vercel.app"),
  title: "Lemine Mbareck | Data Engineer",
  description:
    "Data engineer and people leader building enterprise data pipelines and reporting with Snowflake, SQL, Python, Power BI, and agentic AI. Based in Fayetteville, AR.",
  openGraph: {
    title: "Lemine Mbareck | Data Engineer",
    description:
      "Data engineer and people leader building enterprise data pipelines and reporting with Snowflake, SQL, Python, Power BI, and agentic AI.",
    url: "/",
    siteName: "Lemine Mbareck",
    images: ["/images/profile.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#171613" },
  ],
};

const themeInitScript = `try{var t=localStorage.theme;if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Navigation />
        {children}
        <footer className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-ink/60">
            <p>&copy; {new Date().getFullYear()} Lemine Mbareck</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Mbareck21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine transition-colors"
              >
                GitHub &#8599;
              </a>
              <a
                href="https://linkedin.com/in/lemine-mbareck"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine transition-colors"
              >
                LinkedIn &#8599;
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
