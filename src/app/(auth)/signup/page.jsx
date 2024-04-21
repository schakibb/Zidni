"use client";
import React, { useState } from "react";
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
import { auth, db, provider } from "../../../utils/firebase/config";
import { useRouter } from "next/navigation";
import { doc, setDoc, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { cn } from "../../../utils/cn";
import Image from "next/image";
const initialState = {
  email: "",
  password: "",
  userName: "",
};
export default function SignUp() {
  let uid;
  const router = useRouter();
  const [formState, setFormState] = useState(initialState);
  const [disabled, setDisabled] = useState(false);
  const handleGoogleSignUp = () => {
    setDisabled(true);
    signInWithPopup(auth, provider)
      .then((cred) => {
        uid = cred.user.uid;
      })
      .then(() => {
        uid = res.user.auth.lastNotifiedUid;
        const ref = addDoc(db, "users", uid);
        setDoc(ref, {
          userName: formState.userName,
          quizzesTaken: 0,
          coursesFinished: 0,
        });
        router.push("/signin");
      });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      uid = res.user.auth.lastNotifiedUid;
      const ref = addDoc(db, "users", uid);
      await setDoc(ref, {
        userName: formState.userName,
        quizzesTaken: 0,
        coursesFinished: 0,
      });
      console.log("Created User");
      setFormState(initialState);
      router.push("/signin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <form className="grid gap-2" onSubmit={handleSignUp}>
              <Card className="mt-20">
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
                    <Label htmlFor="userName">Name</Label>
                    <Input
                      id="userName"
                      type="userName"
                      placeholder="Lokmane Elhakim"
                      value={formState.userName}
                      onChange={(e) => {
                        setFormState((prev) => ({
                          ...prev,
                          userName: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      className={
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                      }
                      required
                      id="email"
                      type="email"
                      placeholder="lokmanehakim@gmail.com"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <input
                      className={
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
                      }
                      required
                      placeholder="********"
                      id="password"
                      type="password"
                      value={formState.password}
                      onChange={(e) => {
                        setFormState((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <button
                    type="submit"
                    disabled={disabled}
                    className={cn("w-full", buttonVariants())}
                  >
                    Sign Up
                  </button>
                  <button
                    disabled={disabled}
                    onClick={handleGoogleSignUp}
                    className={cn(
                      "w-full mt-2 py-6",
                      buttonVariants({ variant: "secondary" })
                    )}
                  >
                    <Image
                      alt="Google"
                      src={"/logo/google.svg"}
                      width={20}
                      height={20}
                      className="mr-2 dark:text-neutral-50 text-neutral-800"
                    />
                    <span className="text-neutral-800 dark:text-neutral-400">
                      Sign Up with Google
                    </span>
                  </button>
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
            </form>
          </div>
        </div>
        <div className="absolute z-20 mt-auto right-5 bottom-4">
          <blockquote className="space-y-2">
            <p className="text-sm ">
              Seeking knowledge is a duty upon every Muslim.
            </p>
            <footer className="text-xs text-right">
              Prophet Muhammad <span className="text-xs ml-2 -mb-0.5">ﷺ</span>
            </footer>
          </blockquote>
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
