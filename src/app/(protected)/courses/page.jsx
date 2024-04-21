"use client";
import * as React from "react";

import { buttonVariants } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { courses } from "../../../data/courses";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase/config";

const CardWithForm = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container mt-24">
      {user && (
        <div className="text-center ml-4">
          <h1 className="text-xl sm:text-3xl mt-28">
            Hi there {user?.displayName}👋,
          </h1>
          <p className="lg:text-lg text-base ml-2 ">
            Glad to see you , excited to explore our new way of learning
            together. Let's dive in!
          </p>
        </div>
      )}
      {user ? (
        courses.map((course) => {
          return (
            <Card key={course.id} className="m-4 min-w-80">
              <CardHeader>
                <CardTitle>{course.title} </CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>{course.content} </CardContent>
              <CardFooter className="flex justify-between">
                <Link className={buttonVariants()} href={course.path}>
                  Enroll
                </Link>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Sign in to access courses</CardTitle>
            <CardDescription>Sign in to access courses</CardDescription>
          </CardHeader>
          <CardContent>Sign in to access courses</CardContent>
          <CardFooter className="flex justify-between">
            <Link className={buttonVariants()} href="/signin">
              Sign In
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
export default CardWithForm;
