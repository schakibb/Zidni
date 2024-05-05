import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import React from "react";
import { buttonVariants } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Link from "next/link";
import { cn } from "../../../utils/cn";
const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} className="m-4 min-w-80">
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={
                "flex-col justify-center items-center sm:flex mt-5 w-full"
              }
            >
              {course.chapters.map((chapter, idx) => (
                <button
                  className={cn("w-full my-1 text-left", buttonVariants())}
                  key={chapter.chapterId}
                >
                  {idx + 1}. {chapter.title}
                </button>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href={`/courses/${course.title}/learn/${course.quiz}`}
              className={buttonVariants()}
            >
              Take quiz
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Courses;
