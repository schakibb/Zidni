import ScrollToTop from "../components/global/ScrollToTop";
import "../styles/index.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
        <Providers children={children}>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
