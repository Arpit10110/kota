import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Branding & Web Design Agency London & NYC | Creative Agency | KOTA",
  description:
    "Discover KOTA, an award-winning Creative Digital Agency based in London & NYC. Experts in Branding, Web Design & Digital Marketing strategy.",
  icons: {
    icon: "/images/clutch.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F2E6DB]">
      <body className="bg-[#F2E6DB] text-black antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
