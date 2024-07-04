"use client";
import React, { useState } from "react";

import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { cn } from "../../utils/cn";
import Link from "next/link";
import { CardTitle } from "../../components/ui/featuresCard";
const page = () => {
  const [iframe, setIframe] = useState(100); //default
  const iframes = [
    {
      title: "Create Account and enroll our courses",
      link: (
        <iframe
          src="https://scribehow.com/embed/Create_Account_and_enroll_our_courses__6I1EPc0gSDG81Gaydxte1Q?as=scrollable&skipIntro=true"
          width="100%"
          height="640"
          frameborder="0"
          className="dark:bg-background rounded-lg"
        >
          Loading...
        </iframe>
      ),
    },
    {
      title: "How to visualise our courses",
    },
    {
      title: "How to use our Chatbot",
    },
    {
      title: "How to contribute to our project",
    },
    {
      title: "How to add resources",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Documentation</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {docsData.map((frame, index) => {
              return (
                <p
                  key={frame.id}
                  onClick={() => setIframe(index)}
                  className={cn(
                    "cursor-pointer font-semibold",
                    iframe === index ? "text-blue-500" : ""
                  )}
                >
                  {frame.title}
                </p>
              );
            })}
            <Link
              className="cursor-pointer font-semibold underline text-blue-600"
              href={
                "https://lokmanes-organization.gitbook.io/untitled/overview/what-we-do"
              }
            >
              Detailed documentation
            </Link>
          </nav>
          <div className="grid gap-6">
            {iframe === 100 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to the Documentation page</CardTitle>
                </CardHeader>
                <CardContent>Select a topic to view its guide.</CardContent>
              </Card>
            ) : iframes[iframe]?.
              iframes[iframe]?.link
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Documentation Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  The documentation for this topic is not yet available, but it
                  will be provided soon. If you don't find what you're looking
                  for, please contact us at :
                  <Link
                    className="cursor-pointer font-semibold underline text-blue-500 ml-1"
                    href={"mailto:contact.zidni@gmail.com"}
                  >
                    contact.zidni@gmail.com
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
