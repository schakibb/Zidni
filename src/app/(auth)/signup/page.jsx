"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Button } from "../../../components/ui/button";
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
import { auth, db } from "../../../utils/firebase/config";
import { useRouter } from "next/navigation";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
const initialState = {
  email: "",
  password: "",
  userName: "",
};
export default function SignUp() {
  let uid;
  const router = useRouter();
  const [formState, setFormState] = useState(initialState);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      uid = res.user.auth.lastNotifiedUid;
      const ref = doc(db, "users", uid);
      const docRef = await setDoc(ref, {
        userName: formState.userName,
        quizzesTaken: 0,
        coursesFinished: 0,
      });
      // await addDoc(collection(db, "users"), {
      //   userName: formState.userName,
      //   coursesFinished: 0,
      //   quizzesTaken: 0,
      // });
      console.log("Created User");
      setFormState(initialState);
      router.push("/signin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="container relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="decorative absolute inset-0 bg-zinc-900" />

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Seeking knowledge is a duty upon every Muslim.
              </p>
              <footer className="text-sm">
                Prophet Muhammad
                <span className="text-xl ml-2 -mb-0.5">ﷺ</span>
              </footer>
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
                  <Input
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
                  <Input
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
