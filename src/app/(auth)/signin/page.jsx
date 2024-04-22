"use client";
import Image from "next/image";
import React, { useState } from "react";
import { auth, provider } from "../../../utils/firebase/config";
import { useRouter, redirect } from "next/navigation";

import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { cn } from "../../../lib/utils";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const router = useRouter();
  const handleGoogleSignIn = async () => {
    setDisabled(true);
    signInWithPopup(auth, provider)
      .then(() => {
        setDisabled(false);
      })
      .then(() => {
        router.push("/courses");
      });
  };
  const handleSignIn = async () => {
    e.preventDefault();
    setDisabled(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password).then(
        () => {
          setEmail("");
          setPassword("");
          router.push("/courses");
        }
      );
      console.log({ res });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <form onSubmit={handleSignIn} className="grid gap-2">
              <Card className="mt-20">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">
                    Sign In
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your email and password to sign in
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      className={
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                      }
                      required
                      id="email"
                      type="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <input
                      className={
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                      }
                      required
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <button
                    type="submit"
                    className={cn("w-full my-2", buttonVariants())}
                  >
                    Sign In
                  </button>
                  <button
                    disabled={disabled}
                    className={cn(
                      "w-full py-6",
                      buttonVariants({ variant: "secondary" })
                    )}
                    onClick={handleGoogleSignIn}
                  >
                    <Image
                      src={"/logo/google.svg"}
                      width={20}
                      height={20}
                      alt="Google"
                      className="mr-2 dark:text-neutral-50 text-neutral-800"
                    />
                    <span className="text-neutral-800 dark:text-neutral-400">
                      Sign In with Google
                    </span>
                  </button>
                  <p className="mt-2 text-xs text-center text-gray-700">
                    Don&apos;t have an account?
                    <Link
                      href="/signup"
                      className="text-blue-600 hover:underline ml-0.5"
                    >
                      Sign Up
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </form>
          </div>

          <div className="absolute z-20 mt-auto right-5 bottom-4">
            <blockquote className="space-y-2">
              <p className="text-sm ">
                Whoever travels a path in search of knowledge, <br />
                Allah will make easy for him a path to Paradise.
              </p>
              <footer className="text-xs text-right">
                Prophet Muhammad <span className="text-xs ml-2 -mb-0.5">ﷺ</span>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/Image_decoration.png"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
