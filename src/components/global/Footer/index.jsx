"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 w-full mx-auto bg-white dark:bg-inherit py-3 -bottom-3">
        <div className="container">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
