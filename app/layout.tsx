import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-neutral-950 text-neutral-400 text-center py-4">
          <div className="max-w-7xl mx-auto px-6">
            &copy; {new Date().getFullYear()} Lemine Mbareck. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
