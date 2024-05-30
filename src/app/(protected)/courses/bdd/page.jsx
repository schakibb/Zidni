import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { buttonVariants } from "../../../../components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Card>
        <CardHeader className="text-center text-2xl">
          <CardTitle>Practice your knowledge</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            className="hidden sm:block rounded-lg max-h-[80dvh] min-h-[70dvh] "
            src="https://www.sql-practice.com/"
            width="100%"
          >
            Loading...
          </iframe>
        </CardContent>
        <CardFooter>
          <Link
            className={buttonVariants()}
            href={"https://www.sql-practice.com/"}
          >
            Visit website
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default page;
