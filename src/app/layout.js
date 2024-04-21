import ScrollToTop from "../components/global/ScrollToTop";
import "../styles/index.css";
import Header from "../components/global/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/global/Footer/index";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Zidni elearning platform",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Analytics />
        <Providers children={children}>
          <Header />
          {children}
          <Footer />

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
