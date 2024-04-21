"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-[98dvw] mx-auto mb-8 bottom-0 left-1 absolute sm:relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center  items-center justify-center text-xs text-gray-400">
          <p className="mr-4 mt-8 mb-2 md:my-0 ">&copy; 2024 Zidni Team.</p>
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
              Terms
            </Link>
            <Link href={"/team"} className="">
              Team
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
