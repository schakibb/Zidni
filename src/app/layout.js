import ScrollToTop from "../components/global/ScrollToTop";
import "../styles/index.css";
import Header from "../components/global/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Zidni Elearning | Empowering algerian minds",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <link rel="icon" href="/logo/usthb.png" />
      <body
        suppressHydrationWarning={true}
        className={`bg-[#fdfdfd] dark:bg-background ${inter.className}`}
      >
        <Providers children={children}>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
