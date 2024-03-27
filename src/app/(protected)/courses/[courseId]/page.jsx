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
import Visualisation from "../../../../components/global/Visualisation";

const page = () => {
  const pathname = usePathname();
  const selectedCourse = courses.filter(
    (course) => course.path === pathname
  )[0];
  console.log(typeof selectedCourse.next);
  return (
    <div className=" container mt-[9vh] h-[91vh]">
      <ResizablePanelGroup
        className={"flex-col justify-center items-center sm:flex"}
        direction="horizontal"
      >
        <ResizablePanel>
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

        <ResizableHandle withHandle className={"h-full"} />
        <ResizablePanel className="grid grid-cols-1" defaultSize={5}>
          <p className="text-6xl">
            {" "}
            <Visualisation />
          </p>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
