"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="ml-[30%] mb-8">
        <div className="flex items-center text-xs text-gray-400">
          <p className="mr-4 mt-8 md:mt-0">&copy; 2024 Zidni Team.</p>
          <div>
            <Link href={"/contact"} className="px-2">
              Contact us
            </Link>
            <Link href={"/docs"} className="px-2">
              Docs
            </Link>
            <Link href={"/about"} className="px-2">
              About
            </Link>
            <Link href={"/terms"} className="px-2">
              Terms and services
            </Link>
            <Link href={"/team"} className="px-2">
              Team
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
