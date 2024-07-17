import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconCode } from "@tabler/icons-react";
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
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
          </div>
          {children}
          <BackgroundBeams />
        </>
      </body>
    </html>
  );
}
