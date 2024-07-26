import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Created by Lemine Mbareck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-neutral-500  antialiased`}>
        {" "}
        <div className="my-10">
          <FloatingNav />
        </div>
        <div>
          <div className="h-screen w-screen z-0">
            <BackgroundBeams />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
