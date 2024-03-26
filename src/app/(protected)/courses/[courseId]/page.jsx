"use client";
import * as React from "react";

import { Button, buttonVariants } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { courses } from "../../../../data/courses";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../components/ui/resizable";
import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const selectedCourse = courses.filter(
    (course) => course.path === pathname
  )[0];
  console.log(typeof selectedCourse.next);
  return (
    <div className="container mt-20">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={60}>
          <Card className="m-4 min-w-80">
            <CardHeader>
              <CardTitle>{selectedCourse.title} </CardTitle>
              <CardDescription>{selectedCourse.description}</CardDescription>
            </CardHeader>
            <CardContent>{selectedCourse.content} </CardContent>
            <CardFooter className="flex justify-between">
              <Link className={buttonVariants()} href={selectedCourse.next}>
                Enroll
              </Link>
            </CardFooter>
          </Card>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel className="grid grid-cols-1 w-full ">
          <p className="text-6xl">VISUALISATION</p>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
