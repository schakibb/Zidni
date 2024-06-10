"use client";
import React, { useState } from "react";

import { Card, CardHeader, CardTitle } from "../../components/ui/card";
import { cn } from "../../utils/cn";
import { docsData } from "./docsData";
const page = () => {
  const [iframe, setIframe] = useState(-1);
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
                    "cursor-pointer font-semibold hover:text-blue-500",
                    iframe === index ? "text-blue-700" : ""
                  )}
                >
                  {frame.title}
                </p>
              );
            })}
            {/*
            #TODO: make an array of docsData with titles and links, map over them and show one at a time
            <Link href="#">Apparence</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link> */}
          </nav>
          <div className="grid gap-6 h-20">
            {iframe !== -1 ? (
              <Card>{docsData[iframe]?.link}</Card>
            ) : (
              <Card className="py-3 text-center">
                <CardHeader>
                  <CardTitle>
                    Welcome to the Documentation page, select a topic to view
                    it's guide
                  </CardTitle>
                </CardHeader>
              </Card>
            )}
            {/* <Card>
              {docsData.map((iframe, index) => {
                return index === iframe && <Card>{iframe.link}</Card>;
              })}
            </Card> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
