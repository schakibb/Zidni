"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase/config";
import { useRouter } from "next/navigation";

export default function SignUpWithImage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", `${true}`);
      setEmail("");
      setPassword("");
      router.push("/signin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Zidni
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Seeking knowledge is a duty upon every Muslim.
              </p>
              <footer className="text-sm">Prophet Muhammad</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 mt-24 sm:mx-20 md:m-0 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">
                  Create an account
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to sign up
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
                <Button className="w-full" onClick={handleSignUp}>
                  Sign Up
                </Button>
                <p className="mt-2 text-xs text-center text-gray-700">
                  Already have an account?
                  <Link
                    href="/signin"
                    className=" text-blue-600 hover:underline ml-0.5"
                  >
                    Sign In
                  </Link>
                </p>
              </CardFooter>
            </Card>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary ml-0.5"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
