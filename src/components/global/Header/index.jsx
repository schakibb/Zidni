"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase/config";
import { Button, buttonVariants } from "../../ui/button";
import Image from "next/image";

import { CircleUser, Search, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log("user", user?.photoURL);
  const router = useRouter();
  return (
    <>
      <header className="z-[99] sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link
          href="/"
          className="ml-4 flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image
            src="/logo/usthb.png"
            alt="logo"
            width={38}
            height={38}
            className="mr-12 ml-2"
          />
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/courses"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </nav>
        <div className="flex w-full items-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            {user ? (
              <div className="relative">
                {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  list="courses"
                  type="search"
                  placeholder="Search for courses..."
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
                {
                  // it's static just for the moment
                }
                <datalist id="courses">
                  <option value="sfsd" />
                  <option value="algebra 1" />
                  <option value="algebra 2" />
                  <option value="analyse 1" />
                  <option value="probability" />
                  <option value="stats" />
                </datalist> */}
              </div>
            ) : (
              <div className="hidden sm:block">
                <Link className={buttonVariants()} href={"/signin"}>
                  Sign In
                </Link>
                <span
                  className=" mx-2.5 h-6 w-px bg-gray-400"
                  aria-hidden="true"
                />
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={"/signup"}
                >
                  Get Started
                </Link>
              </div>
            )}
          </form>
          <ThemeToggler />
          <div className="h-full m-0 p-0 !z-[399] ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                >
                  {user ? (
                    user.photoURL ? (
                      <img
                        src={user?.photoURL}
                        className="rounded-full h-full w-full"
                      />
                    ) : (
                      <CircleUser className="h-5 w-5" />
                    )
                  ) : (
                    <Menu className="h-5 w-5 " />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user?.displayName ?? <p>Pages</p>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user && (
                  <>
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuItem>
                  <Link href="/docs">Docs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses">Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
                {user ? (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <button
                        onClick={() => {
                          signOut(auth);
                          router.push("/signin");
                        }}
                      >
                        Logout
                      </button>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem>
                    <Link href="/signin">Sign in</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      {/* <header
        className={` header left-0 top-0 z-40 flex w-[100dvw] items-center ${
          sticky
            ? ""
            : "absolute bg-transparent shadow-white dark:bg-blend-darken z-[9999] !bg-opacity-80 transition"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" pl-4 xl:mr-12 text-lg">
              
            </div>
            <div className="flex w-full items-center justify-between px-4 ml-5">
              <DropdownMenu className="bg-inherit">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`bg-white dark:bg-black  navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50  px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {userMenuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            {menuItem.submenu && (
                              <div
                                className={`submenu relative left-0 top-full rounded-sm bg-white dark:bg-black  transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                {menuItem.submenu.map((submenuItem, index) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className="block rounded py-2.5 text-sm text-dark hover:text-primary  dark:text-white/70 dark:hover:text-white lg:px-3"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </DropdownMenu>
              <div className="flex ml-auto items-center justify-end pr-16 lg:pr-0 ">
                {user ? (
                  <div className="hidden sm:block">
                    <Button
                      onClick={() => {
                        signOut(auth);
                        router.push("/signup");
                      }}
                    >
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div className="hidden sm:block">
                    <Link className={buttonVariants()} href={"/signin"}>
                      Sign In
                    </Link>
                    <span
                      className=" mx-2.5 h-6 w-px bg-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      className={buttonVariants({ variant: "outline" })}
                      href={"/signup"}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
