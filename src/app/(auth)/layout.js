import ScrollToTop from "../../components/global/ScrollToTop/index";
import "../../styles/index.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
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
    <html lang="en">
      <link
        rel="icon"
        href="/logo/logo-color.png"
        type="image/<generated>"
        itemType="<generated>"
      />
      <body className={`bg-[#fdfdfd] dark:bg-background ${inter.className}`}>
        <Providers children={children}>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
