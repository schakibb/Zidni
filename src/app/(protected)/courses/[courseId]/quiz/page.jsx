"use client";

import { usePathname } from "next/navigation";
import App from "../../../../../components/quiz/App";

const page = () => {
  const pathname = usePathname();
  const courseName = pathname.split("/").slice(-2)[0];
  return (
    <div className="flex items-center justify-center w-full">
      <App name={courseName} />
    </div>
  );
};

export default page;
