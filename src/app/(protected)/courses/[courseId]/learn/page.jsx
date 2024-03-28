"use client";
import * as React from "react";
import Courses from "../../../../../components/global/Courses/Courses";

import { courses } from "../../../../../data/courses";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../../components/ui/resizable";
import { usePathname } from "next/navigation";
import Visualisation from "../../../../../components/global/Visualisation";

const page = () => {
  const pathname = usePathname();
  // const selectedCourse = courses.filter(
  //   (course) => course.path === pathname
  // )[0];
  return (
    <div className=" mt-[9vh] min-h-fit overflow-x-hidden">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={97}>
          <Courses courses={courses} />
        </ResizablePanel>

        <ResizableHandle withHandle className={"min-h-[91dvh]"} />
        <ResizablePanel className="grid grid-cols-1" defaultSize={3}>
          <Visualisation />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
