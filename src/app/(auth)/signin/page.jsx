"use client";
import Image from "next/image";
import React, { useState } from "react";
import { auth, provider } from "../../../utils/firebase/config";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { Button, buttonVariants } from "../../../components/ui/button";
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
  const handleGoogleSignIn = () => {
    setDisabled(true);
    signInWithPopup(auth, provider).then((cred) => {
      console.log(cred);
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
      <div className="container relative  h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="decorative absolute inset-0 bg-zinc-900 lg:min-w-[600px] xl:min-w-[800px] " />

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Whoever travels a path in search of knowledge, Allah will make
                easy for him a path to Paradise.
              </p>
              <footer className="text-sm">
                Prophet Muhammad <span className="text-xl ml-2 -mb-0.5">ﷺ</span>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 mt-24 sm:mx-20 md:m-0">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to sign in
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full my-2" onClick={handleSignIn}>
                  Sign In
                </Button>
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
          </div>
        </div>
      </div>
    </>
  );
}
