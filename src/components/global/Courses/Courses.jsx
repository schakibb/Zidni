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
const Courses = ({ courses }) => {
  return (
    <div className={"flex-col justify-center items-center sm:flex mt-5"}>
      {courses.map((course) => (
        <Card className="m-4 min-w-80">
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {course.chapters && (
              <Accordion
                key={course.id}
                type="single"
                collapsible
                className="decoration"
              >
                {course.chapters.map((chapter) => (
                  <AccordionItem
                    value={chapter.chapterId}
                    key={chapter.chapterId}
                  >
                    <AccordionTrigger>{chapter.title}</AccordionTrigger>
                    <AccordionContent>
                      {chapter.chapterDescription}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </CardContent>
          <CardFooter>
            <Link href={course.next} className={buttonVariants()}>
              Next Course
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
