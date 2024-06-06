"use client";

import { usePathname } from "next/navigation";
import App from "../../../../../components/quiz/App";
import BDDVisualisation from "../../../../../data/visualisation/bdd/bdd";
const page = () => {
  const pathname = usePathname();
  const courseName = pathname.split("/").slice(-2)[0];
  if (courseName === "bdd") return <BDDVisualisation />;
  return (
    <div className="flex items-center justify-center w-full">
      <App name={courseName} />
    </div>
  );
};

export default page;
